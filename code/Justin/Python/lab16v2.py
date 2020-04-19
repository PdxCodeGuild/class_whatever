
import colorsys

from PIL import Image
img = Image.open("/Users/pizzaboynizza/PycharmProjects/class_whatever/code/Justin/Python/lenna.png") 
width, height = img.size
pixels = img.load()

for x in range(width):
    for y in range(height):
        r, g, b = pixels[x, y]

        h, s, v = colorsys.rgb_to_hsv(r/255, g/255, b/255)

        h = float(r/255)

        s = float(g/255)

        v = float(b/255)

        r, g, b = colorsys.hsv_to_rgb(h, s, v)

        r = int(r*255)
        g = int(g*255)
        b = int(b*255)

        pixels[x, y] = (r, g, b) 

img.show()