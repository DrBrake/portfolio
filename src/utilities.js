import uuidv1 from 'uuid/v1';

export const getUniqueKey = () => {
    return uuidv1();
}