type MenuOptions = '' | 'all' | 'camiseta' | 'caneca' | 'chaveiro';

export const createMenuObject = (activeMenu: MenuOptions) => {
    let returnObject = {
        all: false,
        camiseta: false,
        caneca: false,
        chaveiro: false,
    }

    if (activeMenu !== '') {
        returnObject[activeMenu] = true;
    }

    return returnObject;
};
