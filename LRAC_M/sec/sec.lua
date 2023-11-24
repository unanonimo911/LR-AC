local lrac = {}
function lrac.lua(arg)
	local code, err = load('return ' .. arg, '@sec')
	if err then
		code, err = load(arg, '@sec')
	end
	if err then
		return nil, err
	end
	local status, result = pcall(code)
	if status then
		return result
	end
	return nil, result
end
function RunCode(lang, str)
	return lrac[lang](str)
end