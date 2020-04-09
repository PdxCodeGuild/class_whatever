from django.db import models



class Post(models.Model):
    author = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True)
    content = models.CharField(max_length=128)
    replying_to = models.ForeignKey("self", on_delete=models.SET_NULL, null=True, blank=True)
    # hearts = models.IntegerField(default=0) # would have to figure out a way for a user to only be able to heart something once
    # rechirp = models.ForeignKey(Post, on_delete=models.CASCADE, null=True, blank=True)


    # class Meta:
    #     ordering = ['-created']