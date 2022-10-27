from django.contrib import admin
from .models import Product, BarrowProduct, Review, ReviewResult

# Register your models here.
admin.site.register(Product)
admin.site.register(BarrowProduct)
admin.site.register(Review)
admin.site.register(ReviewResult)