# from django.db import models

# # first attempt

# class Chirp(models.Model):
#     troll = models.ForeignKey('auth.User', on_delete=models.CASCADE)
#     spitfire = models.CharField(max_length=100)
#     incepted = models.DateTimeField(auto_now_add=True)

# class Stalk(models.Model):
#     ranter = models.ForeignKey('auth.User', on_delete=models.CASCADE)
#     target = models.ForeignKey('auth.User', on_delete=models.CASCADE)
#     created = models.DateTimeField(auto_now_add=True)

    # class Meta:
    #     unique = ('user', 'target')
