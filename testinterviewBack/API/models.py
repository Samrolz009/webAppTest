from django.db import models

# Create your models here.
class Problem(models.Model):
    input = models.TextField(max_length=400)