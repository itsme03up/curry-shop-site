import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')
django.setup()

from shop.models import MenuItem

MenuItem.objects.all().delete()

items = [
    {
        "name": "Beef Tendon Curry",
        "description": "Our signature dish. Tender beef tendon simmered for hours.",
        "price": 950,
        "stats_boost": "Stamina +50",
        "item_type": "CURRY"
    },
    {
        "name": "Gateau Chocolat",
        "description": "Rich and moist chocolate cake. Perfect for dessert.",
        "price": 500,
        "stats_boost": "Happiness +10",
        "item_type": "CURRY"
    },
    {
        "name": "Yona Yona Ale (IPA)",
        "description": "A craft beer with a citrusy aroma and bitter finish.",
        "price": 750,
        "stats_boost": "Charisma +5",
        "item_type": "DRINK"
    }
]

for item in items:
    MenuItem.objects.create(**item)

print("Data populated successfully!")
