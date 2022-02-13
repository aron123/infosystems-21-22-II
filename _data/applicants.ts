export interface Applicant {
    id: number;
    name: string;
    age: number;
    role: string;
    education: 'középiskola' | 'BSc' | 'MSc' | 'PhD';
    desiredSalary: number;
}

export const applicants: Applicant[] = [
    {
        id: 1,
        name: 'Tóth Béla',
        age: 25,
        role: 'Junior Developer',
        education: 'MSc',
        desiredSalary: 300000
    },
    {
        id: 2,
        name: 'Kiss Géza',
        age: 42,
        role: 'Senior Developer',
        education: 'BSc',
        desiredSalary: 1300000
    },
    {
        id: 3,
        name: 'Dr. Szabó Ferenc',
        age: 42,
        role: 'Business Analyst',
        education: 'PhD',
        desiredSalary: 450000
    },
    {
        id: 4,
        name: 'Nagy Péter',
        age: 27,
        role: 'Software Architect',
        education: 'BSc',
        desiredSalary: 420000
    },
    {
        id: 5,
        name: 'Kovács Tamás',
        age: 33,
        role: 'UX Designer',
        education: 'középiskola',
        desiredSalary: 315000
    },
    {
        id: 6,
        name: 'Dr. Horváth Ilona',
        age: 36,
        role: 'Security Expert',
        education: 'PhD',
        desiredSalary: 736000
    },
    {
        id: 7,
        name: 'Székely László',
        age: 22,
        role: 'Software Developer',
        education: 'BSc',
        desiredSalary: 412000
    },
    {
        id: 8,
        name: 'Varga Béláné',
        age: 34,
        role: 'System Administrator',
        education: 'középiskola',
        desiredSalary: 1300000
    },
    {
        id: 9,
        name: 'Fehér János',
        age: 43,
        role: 'Product Owner',
        education: 'MSc',
        desiredSalary: 725000
    },
    {
        id: 10,
        name: 'Molnár Árpád',
        age: 36,
        role: 'General Director Sales Agent Manager Expert',
        education: 'középiskola',
        desiredSalary: 3500000
    }
];