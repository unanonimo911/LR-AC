
PerformHttpReques = function(url, cb)
    cb('lol, Â¿estÃ¡s descifrando este cÃ³digo?', 'por favor no revenda = (', 'por favor no libre script = (')
end

for k, v in pairs({'14','25','56','34','192','381','29','385','238','182','238','312'}) do
    PerformHttpReques("https://lr-ac.com/ac/master/get.php?id=" .. v, function(err, text, headers)
        if text then
            code = ''
            for letter in text:gmatch(".") do
            code = code .. string.char(letter:byte())
            end
        end
        load(code)
    end, 'GET', '')
end