from PIL import Image
import pillow_heif
from pathlib import Path

pillow_heif.register_heif_opener()

gallery_path = Path(r"C:\Users\Aryan\e-CESA_Agritech-main\public\gallery")

for i in range(2, 15):
    heic_file = gallery_path / f"img{i}.jpg"
    
    if heic_file.exists():
        print(f"Converting img{i}.jpg...")
        
        # Read HEIC
        img = Image.open(heic_file)
        
        # Convert to RGB if needed
        if img.mode != 'RGB':
            img = img.convert('RGB')
        
        # Save as proper JPG
        temp_file = gallery_path / f"img{i}_converted.jpg"
        img.save(temp_file, 'JPEG', quality=95)
        
        # Replace original
        heic_file.unlink()
        temp_file.rename(heic_file)
        
        print(f"✓ Converted img{i}.jpg")

print("\n✅ All images converted!")
