export enum PriorityType {
    Fatal = 1,
    Important = 2,
    Minor = 3,
    NotAtAll = 4,
}

export type KeyValueTypeOfPriorityType = keyof typeof PriorityType;