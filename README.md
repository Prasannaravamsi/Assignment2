Note: page fixture gives you one ready-to-use page for the test
browser context is a separate browser session container that can create its own pages
a fresh browser context starts with isolated state
We opened the URL using page fixture and enetered email. But when we opened a new broswer context and new page, the broswer started with isolated state so it is a fresh lightweight incongnito session running inside a broswer instance. so you will not be able to see the email that you enetered before with an other page opened in different context.