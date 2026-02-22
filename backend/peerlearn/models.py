from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils.text import slugify

class User(AbstractUser):
    phone_number = models.CharField(max_length=20)
    is_valid = models.BooleanField(default=False)
    total_points = models.DecimalField(default=100)
    updated_at = models.DateTimeField(auto_now=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def get_total_points(self):
        return self.total_points

    def save(self, **kwargs):
        if self.total_points >= 0:
            super().save()
        else:
            return "Total points never negative."

class Skill(models.Model):
    name = models.CharField(max_length=100,unique=True,null=False)
    slug = models.SlugField(unique=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name

class UserSkills(models.Model):
    type_choice = (
        ('T', 'Teacher'),
        ('L', 'Learner')
    )
    user = models.ForeignKey(to=User,on_delete=models.CASCADE)
    skill = models.ForeignKey(to=Skill,on_delete=models.CASCADE)
    type = models.CharField(choices=type_choice,max_length=10)
    level = models.CharField(choices=[('bg','Beginner'),('int','Intermediate'),('ad','Advanced')],max_length=20)
    updated_at = models.DateTimeField(auto_now=True)
    created_at = models.DateTimeField(auto_now_add=True)

class Session(models.Model):
    name = models.CharField(max_length=250,null=False,blank=False)
    user = models.ForeignKey(to=User,on_delete=models.CASCADE)
    time = models.DateTimeField(null=False,blank=False)
    description = models.TextField()
    updated_at = models.DateTimeField(auto_now=True)
    created_at = models.DateTimeField(auto_now_add=True)