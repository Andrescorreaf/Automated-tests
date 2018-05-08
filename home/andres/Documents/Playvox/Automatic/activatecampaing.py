from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import Select
from selenium.common.exceptions import NoSuchElementException
from selenium.common.exceptions import NoAlertPresentException
import unittest, time, re


class UntitledTestCase(unittest.TestCase):
    def setUp(self):
        self.driver = webdriver.Firefox()
        self.base_url = "https://www.katalon.com/"
        self.verificationErrors = []
        self.accept_next_alert = True

    def test_untitled_test_case(self):
        driver = self.driver
        driver.get("https://testing.plvx.co/login")
        driver.find_element_by_id("email").click()
        driver.find_element_by_id("email").clear()
        driver.find_element_by_id("email").send_keys("acorrea@playvox.com")
        time.sleep(5)
        driver.find_element_by_id("password").click()
        driver.find_element_by_id("password").clear()
        driver.find_element_by_id("password").send_keys("Andresyblank12")
        time.sleep(5)
        driver.find_element_by_css_selector("input.btn.btn-lg.btn-light-success.btn-block").click()
        time.sleep(5)
        driver.find_element_by_link_text("Performance").click()
        time.sleep(5)
        driver.find_element_by_css_selector("button.btn.btn-sm.btn-default.dropdown-toggle").click()
        time.sleep(5)
        driver.find_element_by_link_text("Edit").click()
        time.sleep(5)
        driver.find_element_by_id("campaign-status").click()
        time.sleep(5)
        driver.find_element_by_css_selector("span.toggle-handle.btn.btn-default").click()
        time.sleep(5)
        driver.find_element_by_id("btn-confirm-set-status").click()
        time.sleep(5)
        driver.find_element_by_id("btn-save").click()
        time.sleep(5)
        driver.find_element_by_css_selector("img.img-circle.profile").click()
        driver.find_element_by_id("link-logout").click()

    def is_element_present(self, how, what):
        try:
            self.driver.find_element(by=how, value=what)
        except NoSuchElementException as e:
            return False
        return True

    def is_alert_present(self):
        try:
            self.driver.switch_to.alert()
        except NoAlertPresentException as e:
            return False
        return True

    def close_alert_and_get_its_text(self):
        try:
            alert = self.driver.switch_to.alert()
            alert_text = alert.text
            if self.accept_next_alert:
                alert.accept()
            else:
                alert.dismiss()
            return alert_text
        finally:
            self.accept_next_alert = True

    def tearDown(self):
        self.driver.quit()
        self.assertEqual([], self.verificationErrors)


if __name__ == "__main__":
    unittest.main()
