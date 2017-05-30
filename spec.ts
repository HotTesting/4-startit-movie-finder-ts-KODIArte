import {browser, element,By, $, $$} from 'protractor'

    describe('test1', function() {
    it('test1', function () {
        const URL = 'https://movies-finder.firebaseapp.com/'

   browser.get(URL)
   browser.sleep(10000)

     expect(browser.getCurrentUrl()).toEqual(URL)
     expect(browser.getTitle()).toEqual('Movies Finder')
    })
     it ('by buttontetxt', function() {
         
         expect(element(By.buttonText('Go!')).isDisplayed()).toBeTruthy()
     })

 it ('by link text', function() {

     let dramaLink = element(By.linkText('Drama'))

     expect(dramaLink.isDisplayed()).toBeTruthy()
     expect(dramaLink.getText()).toEqual('Drama')
    
})
    
   it ('by link tetxt', function() {

       let ScienceFictionLink = element(By.linkText('Science Fiction'))

       expect(ScienceFictionLink.isDisplayed()).toBeTruthy()
       expect(ScienceFictionLink.getText()).toEqual('science Fiction')
  })
})
