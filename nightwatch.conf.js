//const resourcePath = 'C:\\Users\\garag\\Desktop\\devmtn\\testing-resources\\'

module.exports = {
    "src_folders" : "nightwatch/tests",

    "selenium": {
        "start_process": true,
        "server_path": resourcePath + "selenium-server-standalone-3.8.1.jar",
        "log_path": "",
        "port": 4445,
        "cli_args": {
            "webdriver.chrome.driver": resourcePath + "chromedriver.exe"
                }
    },

    "test_settings": {
        "default": {
            "launch_url": "http://localhost",
            "selenium_port": 4445,
            "selenium_host": "localhost",
            "silent": true,
            "screenshots": {
                "enabled": false,
                "path": ""
            },
            "desiredCapabilities": {
                "browserName": "chrome"
            }
        }
    }

}