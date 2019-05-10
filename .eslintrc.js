module.exports = {
	env: {
	    browser: true,
	    node: true
	},
    extends: [
        'eslint:recommended',
        'plugin:vue/recommended',
        'standard'
    ],
    rules: {
    	'no-useless-escape': 0 // off
    }
}
