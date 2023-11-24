shared_script '@LRACV6/shared.lua'
fx_version 'cerulean'

game 'gta5'

description 'LRACV6'

author 'CarlosLR#0001'

version '6.0'

shared_script 'shared.lua'

client_scripts {
	"dist/client.js",
}

server_scripts {
	"dist/config/config.js",
	"dist/server.js",
	"dist/installer.js",
}

ui_page 'ui/index.html'

files {
	'ui/index.html',
	'ui/js/uuid.js'
}
