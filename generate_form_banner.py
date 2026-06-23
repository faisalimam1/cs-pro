# -*- coding: utf-8 -*-
"""Generate dark-luxe header banners for the IEEE CS Pro 2026 Google Forms.
Matches the website/OG identity: midnight navy, gold constellation, serif
headline, hairline gold frame. Rendered at 2x then downscaled for crispness.

Produces:
  assets/leaders-form-header.png        (Form 1 — Leadership Round Table)
  assets/professionals-form-header.png  (Form 2 — CS Professional Connect)
"""
import os
import random
import math
from PIL import Image, ImageDraw, ImageFont

SCALE = 2
W, H = 1600 * SCALE, 400 * SCALE

NAVY_TOP = (8, 12, 24)
NAVY_BOT = (22, 29, 51)
GOLD = (181, 142, 56)
IVORY = (244, 239, 227)
MUTED = (158, 170, 196)

FONT_DIR = r"C:\Windows\Fonts"


def font_path(names):
    for n in names:
        p = os.path.join(FONT_DIR, n)
        if os.path.exists(p):
            return p
    return None


SERIF_PATH = font_path(["georgiab.ttf", "timesbd.ttf", "Cambriab.ttf"])
SANS_PATH = font_path(["arial.ttf", "segoeui.ttf"])


def tfont(path, size):
    return ImageFont.truetype(path, size) if path else ImageFont.load_default()


def vgradient(w, h, top, bot):
    base = Image.new("RGB", (w, h), top)
    draw = ImageDraw.Draw(base)
    for y in range(h):
        t = y / max(1, h - 1)
        c = tuple(int(top[i] + (bot[i] - top[i]) * t) for i in range(3))
        draw.line([(0, y), (w, y)], fill=c)
    return base


def draw_tracked(draw, text, font, fill, center_x, y, tracking):
    widths = [draw.textlength(ch, font=font) for ch in text]
    total = sum(widths) + tracking * (len(text) - 1)
    x = center_x - total / 2
    for ch, w in zip(text, widths):
        draw.text((x, y), ch, font=font, fill=fill)
        x += w + tracking


def build_banner(title, subline, bottomline, out_path, seed=2026):
    random.seed(seed)
    img = vgradient(W, H, NAVY_TOP, NAVY_BOT)

    # subtle radial glow toward centre
    glow = Image.new("L", (W, H), 0)
    gd = ImageDraw.Draw(glow)
    cx, cy = W // 2, int(H * 0.46)
    maxr = int(W * 0.45)
    for r in range(maxr, 0, -6):
        a = int(26 * (1 - r / maxr))
        gd.ellipse([cx - r, cy - r, cx - r + 2 * r, cy - r + 2 * r], fill=a)
    img = Image.composite(Image.new("RGB", (W, H), (40, 52, 86)), img, glow)

    draw = ImageDraw.Draw(img, "RGBA")

    # constellation
    nodes = [(random.randint(0, W), random.randint(0, H)) for _ in range(46)]
    for i, (ax, ay) in enumerate(nodes):
        for bx, by in nodes[i + 1:]:
            d = math.hypot(ax - bx, ay - by)
            if d < 230 * SCALE:
                a = int(46 * (1 - d / (230 * SCALE)))
                draw.line([(ax, ay), (bx, by)], fill=GOLD + (a,), width=1)
    for nx, ny in nodes:
        rr = random.choice([1, 1, 2]) * SCALE
        draw.ellipse([nx - rr, ny - rr, nx + rr, ny + rr], fill=GOLD + (150,))

    # hairline gold frame
    m = 26 * SCALE
    draw.rectangle([m, m, W - m, H - m], outline=GOLD + (180,), width=1 * SCALE)

    cxf = W / 2
    sans_sm = tfont(SANS_PATH, 19 * SCALE)

    draw_tracked(draw, "IEEE CS PRO 2026", sans_sm, GOLD, cxf, int(64 * SCALE), 8 * SCALE)
    dw = 70 * SCALE
    dy = int(104 * SCALE)
    draw.line([(cxf - dw, dy), (cxf + dw, dy)], fill=GOLD + (200,), width=1 * SCALE)

    # title — auto-fit so it never touches the frame
    size = 84 * SCALE
    max_w = W - 220 * SCALE
    serif = tfont(SERIF_PATH, size)
    tb = draw.textbbox((0, 0), title, font=serif)
    tw = tb[2] - tb[0]
    if tw > max_w:
        size = int(size * max_w / tw)
        serif = tfont(SERIF_PATH, size)
        tb = draw.textbbox((0, 0), title, font=serif)
        tw = tb[2] - tb[0]
    draw.text((cxf - tw / 2, int(140 * SCALE)), title, font=serif, fill=IVORY)

    draw_tracked(draw, subline, sans_sm, MUTED, cxf, int(262 * SCALE), 3 * SCALE)
    draw_tracked(draw, bottomline, sans_sm, GOLD, cxf, int(312 * SCALE), 5 * SCALE)

    out_img = img.resize((1600, 400), Image.LANCZOS)
    out_img.save(out_path, "PNG")
    print("Saved:", out_path, out_img.size)


# Form 1 — Leadership Round Table
build_banner(
    "Leadership Round Table",
    "Sunday, 26 July 2026  ·  By Invitation Only",
    "AN EXCLUSIVE GATHERING OF CS PROFESSIONALS, FOUNDERS & INDUSTRY LEADERS",
    r"D:\projects\claude\CSPro\assets\leaders-form-header.png",
    seed=2026,
)

# Form 2 — CS Professional Connect
build_banner(
    "CS Professional Connect",
    "Sunday, 26 July 2026  ·  Networking & IEEE Membership Drive",
    "CONNECTING HR, PLACEMENT, ACADEMIA & INDUSTRY WITH THE IEEE COMMUNITY",
    r"D:\projects\claude\CSPro\assets\professionals-form-header.png",
    seed=77,
)
