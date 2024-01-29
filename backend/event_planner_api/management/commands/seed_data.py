from django.core.management.base import BaseCommand
from event_planner_api.models import Product

data = [
    {
    "title": "Morning Function-Indoor",
    "price": "2500",
    "productType": "DE",
    "services": [
      "5 GB SSD Cloud Storage",
      "Month Subscription",
      "Responsive Framework",
      "Monthly Billing Software",
      "1 Free Website"
    ]
  },
  {
    "title": "Morning Function-Outdoor",
    "price": "3500",
    "productType": "DE",
    "services": [
      "5 GB SSD Cloud Storage",
      "Month Subscription",
      "Responsive Framework",
      "Monthly Billing Software",
      "1 Free Website"
    ]
  },
  {
    "title": "Night Function-Indoor",
    "price": "5000",
    "productType": "DE",
    "services": [
      "5 GB SSD Cloud Storage",
      "Month Subscription",
      "Responsive Framework",
      "Monthly Billing Software",
      "1 Free Website"
    ]
  },
  {
    "title": "Night Function-Outdoor",
    "price": "5000",
    "productType": "DE",
    "services": [
      "5 GB SSD Cloud Storage",
      "Month Subscription",
      "Responsive Framework",
      "Monthly Billing Software",
      "1 Free Website"
    ]
  },
  {
    "title": "Morning Function-Indoor",
    "price": "2500",
    "productType": "MU",
    "services": [
      "5 GB SSD Cloud Storage",
      "Month Subscription",
      "Responsive Framework",
      "Monthly Billing Software",
      "1 Free Website"
    ]
  },
  {
    "title": "Morning Function-Outdoor",
    "price": "3500",
    "productType": "MU",
    "services": [
      "5 GB SSD Cloud Storage",
      "Month Subscription",
      "Responsive Framework",
      "Monthly Billing Software",
      "1 Free Website"
    ]
  },
  {
    "title": "Night Function-Indoor",
    "price": "5000",
    "productType": "MU",
    "services": [
      "5 GB SSD Cloud Storage",
      "Month Subscription",
      "Responsive Framework",
      "Monthly Billing Software",
      "1 Free Website"
    ]
  },
  {
    "title": "Night Function-Outdoor",
    "price": "5000",
    "productType": "MU",
    "services": [
      "5 GB SSD Cloud Storage",
      "Month Subscription",
      "Responsive Framework",
      "Monthly Billing Software",
      "1 Free Website"
    ]
  },
  {
    "title": "Standard",
    "price": "2500",
    "productType": "CA",
    "services": [
      "5 GB SSD Cloud Storage",
      "Month Subscription",
      "Responsive Framework",
      "Monthly Billing Software",
      "1 Free Website"
    ]
  },
  {
    "title": "Deluxe",
    "price": "3500",
    "productType": "CA",
    "services": [
      "5 GB SSD Cloud Storage",
      "Month Subscription",
      "Responsive Framework",
      "Monthly Billing Software",
      "1 Free Website"
    ]
  },
  {
    "title": "Premium",
    "price": "5000",
    "productType": "CA",
    "services": [
      "5 GB SSD Cloud Storage",
      "Month Subscription",
      "Responsive Framework",
      "Monthly Billing Software",
      "1 Free Website"
    ]
  },
  {
    "title": "Photo Package",
    "price": "2500",
    "productType": "PH",
    "services": [
      "5 GB SSD Cloud Storage",
      "Month Subscription",
      "Responsive Framework",
      "Monthly Billing Software",
      "1 Free Website"
    ]
  },
  {
    "title": "Video Package",
    "price": "3500",
    "productType": "PH",
    "services": [
      "5 GB SSD Cloud Storage",
      "Month Subscription",
      "Responsive Framework",
      "Monthly Billing Software",
      "1 Free Website"
    ]
  },
  {
    "title": "Photo + Preshoot Bundle",
    "price": "5000",
    "productType": "PH",
    "services": [
      "5 GB SSD Cloud Storage",
      "Month Subscription",
      "Responsive Framework",
      "Monthly Billing Software",
      "1 Free Website"
    ]
  },
  {
    "title": "Premium Photo + Video Collection",
    "price": "5000",
    "productType": "PH",
    "services": [
      "5 GB SSD Cloud Storage",
      "Month Subscription",
      "Responsive Framework",
      "Monthly Billing Software",
      "1 Free Website"
    ]
  },
  {
    "title": "Preshoot + Photo + Video Package",
    "price": "5000",
    "productType": "PH",
    "services": [
      "5 GB SSD Cloud Storage",
      "Month Subscription",
      "Responsive Framework",
      "Monthly Billing Software",
      "1 Free Website"
    ]
  }
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