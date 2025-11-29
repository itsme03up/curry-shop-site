from django.db import models

class MenuItem(models.Model):
    TYPE_CHOICES = [
        ('CURRY', 'Curry'),
        ('DRINK', 'Drink'),
        ('POTION', 'Potion'),
    ]

    name = models.CharField(max_length=100)
    description = models.TextField()
    price = models.IntegerField()
    image_url = models.CharField(max_length=255, blank=True, null=True)
    item_type = models.CharField(max_length=10, choices=TYPE_CHOICES, default='CURRY')
    stats_boost = models.CharField(max_length=100, blank=True, help_text="e.g., Stamina +10")

    def __str__(self):
        return self.name

class Quest(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    reward = models.CharField(max_length=100)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.title
