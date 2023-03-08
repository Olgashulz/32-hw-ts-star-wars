import {expiration} from "./constants";

export const checkExpirationDate = (dateOfSaveToLs:number) => {
    const dateNow = new Date();
    const from = new Date(dateOfSaveToLs);
    const thirtyDaysInMilliseconds = expiration * 24 * 60 * 60 * 1000;
    return dateNow.getTime() - from.getTime() < thirtyDaysInMilliseconds;
}