from django.db import models

# Create your models here.
class Post(models.Model):
  title = models.CharField(max_length=200)
  author = models.ForeignKey("app.User", on_delete=models.CASCADE)
  created = models.DateTimeField(auto_now_add=True)
  updated = models.DateTimeField(auto_now=True)
  body = models.TextField()

  def __str__(self):
      return self.title
  