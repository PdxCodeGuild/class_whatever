# *first attempt skeleton*

# class url_shortener_codeManager(models.Manager):
#     def all(self, *args, **kwargs):
#         nc_primary = super(url_shortener_codeManager, self).all(*args, **kwargs)
#         nc = nc.filter(active=False)
#         return nc

# Second attempt

# from django.db import models
# import string

# _char_map = string.ascii_letters+string.digits

# def index(sequence):
#     return "".join([_char_map[x] for x in sequence])

# *more robust model, try to implement if possible

# class url_shortener_code(models.Model):
#     url = models.CharField(max_length=210, )
#     shortcode = models.CharField(max_length=15, unique=True, blank = True)
#     update = models.DateTimeField(auto_now=True)
#     time = models.DateTimeField(auto_now_add=True)
#     active = models.BooleanField(default=True)
#     objects = url_shortener_codeManager()
#     # randomly = url_shortener_code()


# class Link(models.Model):
#     link = models.URLField()
#     hits = models.IntegerField(default=0)

#     def __repr__(self):
#         return "<Link (Hits %s): %s>"%(self.hits, self.link)

#     def short(self):
#         _id = self.id
#         digits = []
#         while _id > 0:
#             rem = _id % 62
#             digits.append(rem)
#             _id /= 62
#         digits.reverse()
#         return index_to_char(digits)

from django.db import models

class url(models.Model):
    code = models.URLField(max_length=6)
    long = models.URLField(max_length=100)
    clicks = models.IntegerField(default=0)

    def __str__(self):
        return f"{self.code} : '{self.long}'"


    # @staticmethod
    # def decode(string):
    #     i = 0
    #     for c in string:
    #         i = i * 64 + _char_map.index(c)
    #     return i

# dead code, use as reference

#     def refresh(self, items=75):
#         print(items)
#         nc = url_shortener_code.objects.filter(id_get=1)
#         new = 0
#         for n in nc:
#             n.shortcode = generate_shortcode(n)
#             n.save()
#             new += 1
#         return "new codes: {i}".format(i=new)

#     def save(self, *args, **kwargs):
#         if self.shortcode is None or self.shortcode == "":
#             self.shortcode = generator()
#         super(url_shortener_code, self).save(*args, **kwargs)


#     def __str__(self):
#         return str(self.url)

class data(models.Model):
    ip = models.CharField(max_length=12, default="", editable=False) 
    agent = models.CharField(max_length=200, default="", editable=False) 
    link = models.ForeignKey(url, on_delete=models.CASCADE, default="", editable=False)
    amount = models.IntegerField(default=1)

    def __str__(self):
        return f"{self.ip}@({self.agent}) clicked {self.link} a total of {self.amount} time(s)"

    def user_str(self):
        return f"{self.ip}@({self.agent})"