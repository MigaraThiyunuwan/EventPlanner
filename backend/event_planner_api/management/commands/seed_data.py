from django.core.management.base import BaseCommand
from event_planner_api.models import Product

data = [
    {
    "title": "Platinum Elegance ",
    "price": "350000",
    "productType": "DE",
    "services": [
      "Customized Theme Design",
      "Premium Decor Elements",
      "Personalized Venue Setup",
      "Floral Arrangements",
      "Ambient Lighting"
    ]
  },
  {
    "title": "Golden Aura",
    "price": "250000",
    "productType": "DE",
    "services": [
      "Stylish Theme Selection",
      "Elegant Decor",
      "Venue Enhancement",
      "Floral Touches",
      "Basic Lighting"
    ]
  },
  {
    "title": "Silver Splendor",
    "price": "150000",
    "productType": "DE",
    "services": [
      "Simple Theme Decor",
      "Warm Atmosphere Creation",
      "Essential Venue Enhancement",
      "Basic Floral Arrangements",
      "Standard Lighting Setup"
    ]
  },
 
  {
    "title": "Gold Harmony",
    "price": "150000",
    "productType": "MU",
    "services": [
      "Live Band or DJ Performance",
      "Interactive Dance Floor",
      "Specialized Performances",
      "Customizable Playlist",
      "High-Quality Sound System"
    ]
  },
  {
    "title": "Silver Serenade",
    "price": "100000",
    "productType": "MU",
    "services": [
      "Live Music Ensemble",
      "Dance Entertainment",
      "Engaging MC Services",
      "Background Music Selection",
      "Basic Lighting Setup"
    ]
  },
  {
    "title": "Bronze Melody",
    "price": "75000",
    "productType": "MU",
    "services": [
      "Standard DJ Services",
      "Background Music",
      "Limited Lighting Setup",
      "Basic Dance Floor",
      "Predefined Playlist"
    ]
  },
 
  {
    "title": "Platinum Feast",
    "price": "275000",
    "productType": "CA",
    "services": [
      "Multi-Course Gourmet Menu",
      "Personalized Dining Experience",
      "Professional Waitstaff",
      "Signature Cocktails",
      "Dietary Accommodations"
    ]
  },
  {
    "title": "Golden Banquet",
    "price": "250000",
    "productType": "CA",
    "services": [
      "Diverse Buffet Selection",
      "Skilled Catering Team",
      "Beverage Station",
      "Elegant Presentation",
      "Vegetarian and Non-Vegetarian Options"
    ]
  },
  {
    "title": "Silver Savory",
    "price": "175000",
    "productType": "CA",
    "services": [
      "Essential Menu",
      "Buffet Setup",
      "Standard Presentation",
      "Self-Service Option",
      "Basic Beverage Selection"
    ]
  },
  {
    "title": "Diamond Capture",
    "price": "200000",
    "productType": "PH",
    "services": [
      "Full-Day Coverage",
      "Candid and Posed Shots",
      "Cinematic Highlights",
      "Dedicated Photography Team",
      "High-Resolution Edited Images"
    ]
  },
  {
    "title": "Golden Frame",
    "price": "175000",
    "productType": "PH",
    "services": [
      "Comprehensive Coverage",
      "Professional Portraits",
      "Highlight Reel",
      "Skilled Photographer",
      "Edited High-Quality Images"
    ]
  },
  {
    "title": "Silver Snapshot",
    "price": "150000",
    "productType": "PH",
    "services": [
      "Essential Coverage",
      "Key Moment Photography",
      "Minimal Editing",
      "Standard Photographer",
      "Digital Image Delivery"
    ]
  },
  
  
]


class Command(BaseCommand):
    help = "Seed data into the Product model."

    def handle(self, *args, **options):
        for entry in data:
            services = entry.pop("services")
            product = Product.objects.create(**entry)

            for service in services:
                product.services.create(description=service)

            self.stdout.write(self.style.SUCCESS(f'Successfully seeded product "{product.title}"'))