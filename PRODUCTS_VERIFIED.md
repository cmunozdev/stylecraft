# Products.ts - Verificados Mayo 2026

## REGLA: Solo agregar ASINs verificados con HTTP 200 en amazon.es

## SECADORES (12 productos)
- B003TQPRGY - Revlon Compact (12.77€) - OK
- B0FFLTC255 - StyleVibe 6-en-1 (84.10€) - BS Elegido - OK
- B0C3M9WBQF - Slopehill (28.98€) - OK
- B00ECBKOCW - Remington Silk (30.99€) - OK
- B0CR4G4HV9 - Cecotec Bamba Radiance (19.90€) - OK
- B0FNCK457Y - Hair Dryer Brush 8-en-1 (127.86€) - OK
- B0CNS4SHT7 - Remington ONE (69.99€) - OK
- B0FH718SMX - Ufesa X-Treme (39.99€) - OK
- B003P70A2S - Valera Swiss (62.55€) - OK
- B0F1FJFMG9 - Dryhsip 5-en-1 (44.30€) - OK
- B07ZRR8LJF - Cecotec Bamba (22.90€) - OK
- B0FQV98Z8Z - Laifen Neo (204.16€) - Premium - OK

## PLANCHAS (8 productos)
- B0CXPRMNWF - Quico Viaje (13.63€) - Mejor Precio - OK
- B09GKY436P - Remington Shine (49.99€) - Top Vendido - OK
- B0DHKHK426 - Annlary 2en1 (23.85€) - OK
- B0CQSNXLJR - Wavytalk Thermal (42.61€) - BS Elegido - OK
- B0CCYPDLCQ - ghd Gold (148.00€) - Premium - OK
- B0D7HGNMZ1 - Wavytalk Air Sculpt (47.73€) - OK
- B09RN8Q4CW - Remington Digital (44.99€) - OK
- B07W864798 - BaByliss Smooth (34.19€) - OK

## RIZADORES (8 productos)
- B0DPZLWX8J - TYMO CurlPro Plus (24.90€) - BS Elegido - OK
- B06XC29B5G - Philips Auto (99.99€) - Premium - OK
- B0GH2GLWGH - Cecotec SurfCare (49.90€) - OK
- B073ZDGXJB - Remington Keratin (40.00€) - OK
- B0BZ4N6B4N - Curling Wand (15.32€) - Mejor Precio - OK
- B0D8GJ6XLX - 6en1 Multi Styler (98.02€) - OK
- B0DCFN72JJ - TYMO ROVY 25mm (28.90€) - OK
- B0D5CP2YDB - TYMO ROVY 32mm (28.90€) - OK

## CEPILLOS (8 productos)
- B01HZ5K8UE - REVLON Salon One-Step (49.00€) - BS Elegido - OK
- B0743BR42Y - BaByliss Styler (42.49€) - OK
- B0FKTHP5D7 - Cecotec 10in1 (44.90€) - OK
- B0D7HGNMZ1 - Wavytalk Air Sculpt (47.73€) - OK
- B0CQSNXLJR - Wavytalk Thermal (42.61€) - OK
- B0G4W45B2J - TYMO 4.0 (59.66€) - OK
- B0FNCK457Y - Hair Dryer Brush 8en1 (127.86€) - OK
- B0D8GJ6XLX - 6en1 Multi Styler (98.02€) - OK

## Metodo de verificacion
```python
python -c "
import urllib.request
headers = {'User-Agent': 'Mozilla/5.0...'}
req = urllib.request.Request('https://www.amazon.es/dp/ASIN', headers=headers)
with urllib.request.urlopen(req, timeout=10) as resp:
    print(resp.status)  # 200 = OK, 404 = delisted
"
```
