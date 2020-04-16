
# import random
# import string

# def generator(size=6, characters=string.ascii_lowercase + string.digits):
#     return ''.join(random.choice(characters) for _ in range(size))

# def generate_shortcode(instance, size=6):
#     new_code = generator(size=size)
#     new_class = instance.__class__
#     nc = new_class.objects.filter(shortcode=new_code).exists
#     if nc_exists:
#         return generate_shortcode(size=size)
#     return new_code