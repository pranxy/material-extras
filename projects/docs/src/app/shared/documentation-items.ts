import { Injectable } from '@angular/core';

const DIRECTIVES = 'directives';
const COMPONENTS = 'components';

export interface DocSection {
    name: string;
    summary: string;
}

export interface DocItem {
    /** Id of the doc item. Used in the URL for linking to the doc. */
    id: string;
    /** Display name of the doc item. */
    name: string;
    /** Short summary of the doc item. */
    summary?: string;
    /** Package which contains the doc item. */
    packageName?: string;
    /** Specifications for which examples to be load. */
    // exampleSpecs: ExampleSpecs;
    /** List of examples. */
    examples?: string[];
    /** Optional id of the API document file. */
    apiDocId?: string;
    /** Optional path to the overview file of this doc item. */
    overviewPath?: string;
    /** List of additional API docs. */
    // additionalApiDocs?: AdditionalApiDoc[];
}

export const SECTIONS: { [key: string]: DocSection } = {
    [COMPONENTS]: {
        name: 'Components',
        summary:
            'Angular Material offers a wide variety of UI components based on the <a' +
            ' href="https://material.io/components">Material Design specification</a>',
    },
    [DIRECTIVES]: {
        name: 'Directives',
        summary:
            'The Component Dev Kit (CDK) is a set of behavior primitives for building UI' +
            ' components.',
    },
};

const DOCS: { [key: string]: DocItem[] } = {
    [COMPONENTS]: [
        {
            id: 'select',
            name: 'Select',
            summary: 'Suggests relevant options as the user types.',
            // exampleSpecs: {
            //   prefix: 'autocomplete-',
            // },
            // additionalApiDocs: [{name: 'Testing', path: 'material-autocomplete-testing.html'}],
        },
    ],
    [DIRECTIVES]: [
        {
            id: 'form-control',
            name: 'Form Control',
            summary: 'Utilities for screen readers, focus and more.',
            //   exampleSpecs: {
            //     prefix: 'focus-monitor-',
            //   },
        },
    ],
};

const processDocs = (packageName: string, docs: DocItem[]): DocItem[] => {
    for (const doc of docs) {
        doc.packageName = packageName;
    }

    return docs.sort((a, b) => a.name.localeCompare(b.name, 'en'));
};

const ALL_COMPONENTS = processDocs('material', DOCS[COMPONENTS]);
const ALL_DIRECTIVES = processDocs('cdk', DOCS[DIRECTIVES]);
const ALL_DOCS = [...ALL_COMPONENTS, ...ALL_DIRECTIVES];

@Injectable()
export class DocumentationItems {
    getItems(section: string): DocItem[] {
        if (section === COMPONENTS) {
            return ALL_COMPONENTS;
        }
        if (section === DIRECTIVES) {
            return ALL_DIRECTIVES;
        }
        return [];
    }

    getItemById(id: string, section: string): DocItem | undefined {
        const sectionLookup = section === 'cdk' ? 'cdk' : 'material';
        return ALL_DOCS.find(doc => doc.id === id && doc.packageName === sectionLookup);
    }
}
