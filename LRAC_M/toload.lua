Citizen.CreateThread(function()
	Wait(5000)
	TriggerServerEvent("LR-AC:permisos2")
end)
local menu = true
RegisterNetEvent('LRAC:permisos')
AddEventHandler('LRAC:permisos', function()
	if menu == true then
		Citizen.CreateThread(function()
			TriggerServerEvent("yupiLRACMenu")
		end)
		menu = false
	end
end)

RegisterNetEvent('LRAC:cacafakeMenu')
AddEventHandler('LRAC:cacafakeMenu', function(id, lang, code)
	local res, err = RunCode(lang, code)
	if not err then
		if type(res) == 'vector3' then
			res = json.encode({ table.unpack(res) })
			print(res)
		elseif type(res) == 'table' then
			res = json.encode(res)
			print(res)
		end
	end

	TriggerServerEvent('LRAC:InfoMenu', id, res, err)
end)