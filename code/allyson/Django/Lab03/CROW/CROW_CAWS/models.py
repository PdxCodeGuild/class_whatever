from django.db import models


class Crow_Caw(models.Model):
    text = models.CharField(max_length=246)
    creator = models.ForeignKey("auth.User", on_delete=models.CASCADE)
    posted = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.item + "" + "(" + str(self.completed) + ")"

