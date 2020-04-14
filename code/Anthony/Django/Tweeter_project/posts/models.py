from django.db import models

class Post(models.Model):
    owner = models.ForeignKey('auth.User',on_delete=models.CASCADE,default=1)
    post_text = models.CharField(max_length=200)
    pub_date = models.DateTimeField()


    def __str__(self):
        return self.post_text