import {Database, PathListEntry} from "./database";

export class CompanyDatabase extends Database {

    protected createTestData() {
        this.create({name: 'Company A', city: 'Winterthur'});
        this.create({name: 'ZHAW', city: 'Winterthur'});
        this.create({name: 'Company B', city: 'Zürich'});
        this.create({name: 'Company C', city: 'Frauenfeld'});
    }

    protected getEntityName() {
        return "company";
    }

    protected getSort(): any[] {
        return ['name'];
    }

    protected createPathListEntry(entry: PathListEntry, entity: any): Promise<PathListEntry> {
        entry.name = entity.name;
        entry.details.push(entity.city);
        return super.createPathListEntry(entry, entity);
    }

}