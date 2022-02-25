export interface ChangelogEntry {
    type: 'major' | 'minor' | 'patch';
    oldValue: number;
    newValue: number;
}