import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ExternalReference } from 'src/app/classes/external-references';
import { Relationship } from 'src/app/classes/stix/relationship';
import { StixObject } from 'src/app/classes/stix/stix-object';
import { RestApiConnectorService } from 'src/app/services/connectors/rest-api/rest-api-connector.service';

@Component({
  selector: 'app-reference-edit-dialog',
  templateUrl: './reference-edit-dialog.component.html',
  styleUrls: ['./reference-edit-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ReferenceEditDialogComponent implements OnInit {
    public reference: ExternalReference;
    public is_new: boolean;
    public stage: number = 0;
    public patch_objects: StixObject[];
    public patch_relationships: Relationship[];

    constructor(public dialogRef: MatDialogRef<ReferenceEditDialogComponent>, @Inject(MAT_DIALOG_DATA) public config: ReferenceEditConfig, public restApiConnectorService: RestApiConnectorService) {
        if (this.config.reference) {
            this.is_new = false;
            this.reference = JSON.parse(JSON.stringify(this.config.reference)); //deep copy
        }
        else {
            this.is_new = true;
            this.reference = {
                source_name: "",
                url: "",
                description: ""
            }
        }
    }

    ngOnInit(): void {
    } 

    public next() {
        if (this.is_new) this.save();
        else this.parse_patches();
    }

    public parse_patches() {
        this.stage = 1; //enter patching stage
        let subscription = this.restApiConnectorService.getAllObjects(null, null, null, null, null, null, true).subscribe({
            next: (results) => {
                // build ID to [name, attackID] lookup
                let idToObject = {}
                results.data.forEach(x => { idToObject[x.stixID] = x });
                // find objects with given reference
                this.patch_objects = [];
                this.patch_relationships = [];
                results.data.forEach(x => {
                    if (x.external_references.hasValue(this.reference.source_name)) {
                        if (x.attackType == 'relationship') this.patch_relationships.push(x);
                        else this.patch_objects.push(x);
                    }
                });
                // patch relationship source/target names and IDs
                this.patch_relationships.map(x => {
                    let serialized = x.serialize();
                    serialized.source_object = idToObject[x.source_ref].serialize();
                    serialized.target_object = idToObject[x.target_ref].serialize();
                    return x.deserialize(serialized);
                });
                this.stage = 2;
            },
            complete: () => { subscription.unsubscribe(); }
        })
    }
    /**
     * Apply patches and save the reference
     */
    public patch() {

    }

    public save() {
        let api = this.is_new? this.restApiConnectorService.postReference(this.reference) : this.restApiConnectorService.putReference(this.reference);
        let subscription = api.subscribe({
            complete: () => { 
                subscription.unsubscribe();
                this.dialogRef.close();
            }
        });
    }

}

export interface ReferenceEditConfig {
    reference?: ExternalReference
}