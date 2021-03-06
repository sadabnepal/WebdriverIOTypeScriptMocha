import { WebdriverIOElement, WebdriverIOElements } from "src/types/webelements";

export default class Page {

    protected async open(path: string) {
        await browser.maximizeWindow();
        return browser.url(path);
    }

    protected getElement(element: string) {
        return $(element);
    }

    protected getElements(element: any) {
        return $$(element);
    }

    protected async clickElement(element: WebdriverIOElement, waitTime?: number) {
        if (waitTime) await element.waitForClickable({ timeout: waitTime })
        await element.click();
    }

    protected async setData(element: WebdriverIOElement, value: string | number, waitTime?: number) {
        if (waitTime) await element.waitForEnabled({ timeout: waitTime })
        await element.clearValue();
        await element.setValue(value);
    }

    protected async scrollToElement(element: WebdriverIOElement) {
        await element.scrollIntoView();
    }

    protected async selectDropdownByText(element: WebdriverIOElement, text: string) {
        await element.selectByVisibleText(text)
    }

    protected async clickOnMatchingElement(elements: WebdriverIOElements, expectedText: string) {
        await elements.forEach(async element => {
            if (await element.getText() === expectedText) await element.click();
        })
    }

}