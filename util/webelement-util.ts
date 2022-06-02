
export async function waitForDisplayedAndGet(locator: string) {
    let element = await $(locator);
    await element.waitForDisplayed();

    return element;
}

export async function waitForClickableAndGet(locator: string) {
    let element = await $(locator);
    await element.waitForClickable();

    return element;
}

export async function waitForExistAndGet(locator: string) {
    let element = await $(locator);
    await element.waitForExist();

    return element;
}

export async function waitForEnabledAndGet(locator: string) {
    let element = await $(locator);
    await element.waitForEnabled();

    return element;
}
