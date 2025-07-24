import random

def generate_ean13():
    prefix = random.choice(['40', '50', '60', '70', '80', '90'])
    body = ''.join([str(random.randint(0, 9)) for _ in range(10)])
    ean = prefix + body
    checksum = sum(int(ch) * (3 if i % 2 == 0 else 1) for i, ch in enumerate(ean)) % 10
    checksum = (10 - checksum) % 10
    return ean + str(checksum)

barcodes = {generate_ean13() for _ in range(500)}
while len(barcodes) < 500:
    barcodes.add(generate_ean13())

for barcode in barcodes:
    print(barcode)