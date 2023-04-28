const fullhtml = {
    "id": "root",
    "type": "div",
    "props": {
        "className": "container"
    },
    "children": [
        {
            "id": "header",
            "type": "header",
            "props": {
                "className": "header"
            },
            "children": [
                {
                    "id": "logo",
                    "type": "img",
                    "props": {
                        "src": "https://picsum.photos/200/200",
                        "alt": "Website Logo"
                    },
                    "children": null
                },
                {
                    "id": "menu",
                    "type": "nav",
                    "props": {
                        "className": "menu"
                    },
                    "children": [
                        {
                            "id": "home-link",
                            "type": "a",
                            "props": {
                                "href": "/",
                                "className": "menu-link",
                                "text": "Home"
                            },
                            "children": null
                        },
                        {
                            "id": "about-link",
                            "type": "a",
                            "props": {
                                "href": "/about",
                                "className": "menu-link",
                                "text": "About"
                            },
                            "children": null
                        },
                        {
                            "id": "contact-link",
                            "type": "a",
                            "props": {
                                "href": "/contact",
                                "className": "menu-link",
                                "text": "Contact"
                            },
                            "children": null
                        }
                    ]
                }
            ]
        },
        {
            "id": "main",
            "type": "main",
            "props": null,
            "children": [
                {
                    "id": "home-section",
                    "type": "section",
                    "props": {
                        "className": "home-section"
                    },
                    "children": [
                        {
                            "id": "home-title",
                            "type": "h1",
                            "props": {
                                "text": "Welcome to my website!"
                            },
                            "children": null
                        },
                        {
                            "id": "home-content",
                            "type": "p",
                            "props": {
                                "text": "This is the homepage of my website. Feel free to browse around and check out the other pages."
                            },
                            "children": null
                        },
                        {
                            "id": "home-button",
                            "type": "button",
                            "props": {
                                "onClick": "console.log('You clicked the button!')",
                                "className": "primary-button",
                                "text": "Click me"
                            },
                            "children": null
                        }
                    ]
                },
                {
                    "id": "about-section",
                    "type": "section",
                    "props": {
                        "className": "about-section"
                    },
                    "children": [
                        {
                            "id": "about-title",
                            "type": "h1",
                            "props": {
                                "text": "About Us"
                            },
                            "children": null
                        },
                        {
                            "id": "about-content",
                            "type": "p",
                            "props": {
                                "text": "We are a team of experts dedicated to creating the best websites on the internet."
                            },
                            "children": null
                        }
                    ]
                },
                {
                    "id": "contact-section",
                    "type": "section",
                    "props": {
                        "className": "contact-section"
                    },
                    "children": [
                        {
                            "id": "contact-title",
                            "type": "h1",
                            "props": {"text":"Contact Us"},
                            "children": null
                        },
                        {
                            "id": "contact-form",
                            "type": "form",
                            "props": {
                                "className": "contact-form",
                                // "onSubmit": "eval (submitForm())"
                            },
                            "children": [
                                {
                                    "id": "name-input",
                                    "type": "input",
                                    "props": {
                                        "type": "text",
                                        "placeholder": "Your name",
                                        "className": "form-input"
                                    },
                                    "children": null
                                },
                                {
                                    "id": "email-input",
                                    "type": "input",
                                    "props": {
                                        "type": "email",
                                        "placeholder": "Your email",
                                        "className": "form-input"
                                    },
                                    "children": null
                                },
                                {
                                    "id": "message-input",
                                    "type": "textarea",
                                    "props": {
                                        "placeholder": "Your message",
                                        "className": "form-textarea"
                                    },
                                    "children": null
                                },
                                {
                                    "id": "submit-button",
                                    "type": "button",
                                    "props": {
                                        "type": "submit",
                                        "className": "primary-button",
                                        "text":"Send message",
                                    },
                                    "children": null
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "id": "footer",
            "type": "footer",
            "props": {
                "className": "footer"
            },
            "children": [
                {
                    "id": "copyright",
                    "type": "p",
                    "props": {
                        "text": "Copyright © 2023"
                    },
                    "children": null
                }
            ]
        }
    ]
}

export default fullhtml;