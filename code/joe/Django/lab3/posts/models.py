from django.db import models



class Post(models.Model):
    author = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True)
    content = models.CharField(max_length=128)
    # hearts = models.IntegerField(default=0)
    # replying_to = models.ForeignKey(Post, on_delete=models.SET_NULL, null=True, blank=True)
    # rechirp = models.ForeignKey(Post, on_delete=models.CASCADE, null=True, blank=True)
