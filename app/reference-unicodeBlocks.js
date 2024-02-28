const unicodeBlocks = {
	"r-0000-001F": { begin: 0x0000, end: 0x001f, name: "Basic Latin Controls" },
	"r-0020-007F": { begin: 0x0020, end: 0x007f, name: "Basic Latin" },
	"r-0080-00FF": { begin: 0x0080, end: 0x00ff, name: "Latin-1 Supplement" },
	"r-0100-017F": { begin: 0x0100, end: 0x017f, name: "Latin Extended-A" },
	"r-0180-024F": { begin: 0x0180, end: 0x024f, name: "Latin Extended-B" },
	"r-0250-02AF": { begin: 0x0250, end: 0x02af, name: "IPA Extensions" },
	"r-02B0-02FF": { begin: 0x02b0, end: 0x02ff, name: "Spacing Modifier Letters" },
	"r-0300-036F": { begin: 0x0300, end: 0x036f, name: "Combining Diacritical Marks" },
	"r-0370-03FF": { begin: 0x0370, end: 0x03ff, name: "Greek and Coptic" },
	"r-0400-04FF": { begin: 0x0400, end: 0x04ff, name: "Cyrillic" },
	"r-0500-052F": { begin: 0x0500, end: 0x052f, name: "Cyrillic Supplement" },
	"r-0530-058F": { begin: 0x0530, end: 0x058f, name: "Armenian" },
	"r-0590-05FF": { begin: 0x0590, end: 0x05ff, name: "Hebrew" },
	"r-0600-06FF": { begin: 0x0600, end: 0x06ff, name: "Arabic" },
	"r-0700-074F": { begin: 0x0700, end: 0x074f, name: "Syriac" },
	"r-0750-077F": { begin: 0x0750, end: 0x077f, name: "Arabic Supplement" },
	"r-0780-07BF": { begin: 0x0780, end: 0x07bf, name: "Thaana" },
	"r-07C0-07FF": { begin: 0x07c0, end: 0x07ff, name: "NKo" },
	"r-0800-083F": { begin: 0x0800, end: 0x083f, name: "Samaritan" },
	"r-0840-085F": { begin: 0x0840, end: 0x085f, name: "Mandaic" },
	"r-0860-086F": { begin: 0x0860, end: 0x086f, name: "Syriac Supplement", nonstandard: true },
	"r-08A0-08FF": { begin: 0x08a0, end: 0x08ff, name: "Arabic Extended-A" },
	"r-0900-097F": { begin: 0x0900, end: 0x097f, name: "Devanagari" },
	"r-0980-09FF": { begin: 0x0980, end: 0x09ff, name: "Bengali" },
	"r-0A00-0A7F": { begin: 0x0a00, end: 0x0a7f, name: "Gurmukhi" },
	"r-0A80-0AFF": { begin: 0x0a80, end: 0x0aff, name: "Gujarati" },
	"r-0B00-0B7F": { begin: 0x0b00, end: 0x0b7f, name: "Oriya" },
	"r-0B80-0BFF": { begin: 0x0b80, end: 0x0bff, name: "Tamil" },
	"r-0C00-0C7F": { begin: 0x0c00, end: 0x0c7f, name: "Telugu" },
	"r-0C80-0CFF": { begin: 0x0c80, end: 0x0cff, name: "Kannada" },
	"r-0D00-0D7F": { begin: 0x0d00, end: 0x0d7f, name: "Malayalam" },
	"r-0D80-0DFF": { begin: 0x0d80, end: 0x0dff, name: "Sinhala" },
	"r-0E00-0E7F": { begin: 0x0e00, end: 0x0e7f, name: "Thai" },
	"r-0E80-0EFF": { begin: 0x0e80, end: 0x0eff, name: "Lao" },
	"r-0F00-0FFF": { begin: 0x0f00, end: 0x0fff, name: "Tibetan" },
	"r-1000-109F": { begin: 0x1000, end: 0x109f, name: "Myanmar" },
	"r-10A0-10FF": { begin: 0x10a0, end: 0x10ff, name: "Georgian" },
	"r-1100-11FF": { begin: 0x1100, end: 0x11ff, name: "Hangul Jamo" },
	"r-1200-137F": { begin: 0x1200, end: 0x137f, name: "Ethiopic" },
	"r-1380-139F": { begin: 0x1380, end: 0x139f, name: "Ethiopic Supplement" },
	"r-13A0-13FF": { begin: 0x13a0, end: 0x13ff, name: "Cherokee" },
	"r-1400-167F": { begin: 0x1400, end: 0x167f, name: "Unified Canadian Aboriginal Syllabics" },
	"r-1680-169F": { begin: 0x1680, end: 0x169f, name: "Ogham" },
	"r-16A0-16FF": { begin: 0x16a0, end: 0x16ff, name: "Runic" },
	"r-1700-171F": { begin: 0x1700, end: 0x171f, name: "Tagalog", nonstandard: true },
	"r-1720-173F": { begin: 0x1720, end: 0x173f, name: "Hanunoo" },
	"r-1740-175F": { begin: 0x1740, end: 0x175f, name: "Buhid" },
	"r-1760-177F": { begin: 0x1760, end: 0x177f, name: "Tagbanwa", nonstandard: true },
	"r-1780-17FF": { begin: 0x1780, end: 0x17ff, name: "Khmer" },
	"r-1800-18AF": { begin: 0x1800, end: 0x18af, name: "Mongolian" },
	"r-18B0-18FF": { begin: 0x18b0, end: 0x18ff, name: "Unified Canadian Aboriginal Syllabics Extended" },
	"r-1900-194F": { begin: 0x1900, end: 0x194f, name: "Limbu" },
	"r-1950-197F": { begin: 0x1950, end: 0x197f, name: "Tai Le" },
	"r-1980-19DF": { begin: 0x1980, end: 0x19df, name: "New Tai Lue" },
	"r-19E0-19FF": { begin: 0x19e0, end: 0x19ff, name: "Khmer Symbols" },
	"r-1A00-1A1F": { begin: 0x1a00, end: 0x1a1f, name: "Buginese" },
	"r-1A20-1AAF": { begin: 0x1a20, end: 0x1aaf, name: "Tai Tham", nonstandard: true },
	"r-1AB0-1AFF": { begin: 0x1ab0, end: 0x1aff, name: "Combining Diacritical Marks Extended", nonstandard: true },
	"r-1B00-1B7F": { begin: 0x1b00, end: 0x1b7f, name: "Balinese" },
	"r-1B80-1BBF": { begin: 0x1b80, end: 0x1bbf, name: "Sundanese" },
	"r-1BC0-1BFF": { begin: 0x1bc0, end: 0x1bff, name: "Batak" },
	"r-1C00-1C4F": { begin: 0x1c00, end: 0x1c4f, name: "Lepcha" },
	"r-1C50-1C7F": { begin: 0x1c50, end: 0x1c7f, name: "Ol Chiki" },
	"r-1C80-1C8F": { begin: 0x1c80, end: 0x1c8f, name: "Cyrillic Extended-C", nonstandard: true },
	"r-1C90-1CBF": { begin: 0x1c90, end: 0x1cbf, name: "Georgian Extended" },
	"r-1CC0-1CCF": { begin: 0x1cc0, end: 0x1ccf, name: "Sundanese Supplement" },
	"r-1CD0-1CFF": { begin: 0x1cd0, end: 0x1cff, name: "Vedic Extensions" },
	"r-1D00-1D7F": { begin: 0x1d00, end: 0x1d7f, name: "Phonetic Extensions" },
	"r-1D80-1DBF": { begin: 0x1d80, end: 0x1dbf, name: "Phonetic Extensions Supplement" },
	"r-1DC0-1DFF": { begin: 0x1dc0, end: 0x1dff, name: "Combining Diacritical Marks Supplement" },
	"r-1E00-1EFF": { begin: 0x1e00, end: 0x1eff, name: "Latin Extended Additional" },
	"r-1F00-1FFF": { begin: 0x1f00, end: 0x1fff, name: "Greek Extended" },
	"r-2000-206F": { begin: 0x2000, end: 0x206f, name: "General Punctuation" },
	"r-2070-209F": { begin: 0x2070, end: 0x209f, name: "Superscripts and Subscripts" },
	"r-20A0-20CF": { begin: 0x20a0, end: 0x20cf, name: "Currency Symbols" },
	"r-20D0-20FF": { begin: 0x20d0, end: 0x20ff, name: "Combining Diacritical Marks for Symbols" },
	"r-2100-214F": { begin: 0x2100, end: 0x214f, name: "Letterlike Symbols" },
	"r-2150-218F": { begin: 0x2150, end: 0x218f, name: "Number Forms" },
	"r-2190-21FF": { begin: 0x2190, end: 0x21ff, name: "Arrows" },
	"r-2200-22FF": { begin: 0x2200, end: 0x22ff, name: "Mathematical Operators" },
	"r-2300-23FF": { begin: 0x2300, end: 0x23ff, name: "Miscellaneous Technical" },
	"r-2400-243F": { begin: 0x2400, end: 0x243f, name: "Control Pictures" },
	"r-2440-245F": { begin: 0x2440, end: 0x245f, name: "Optical Character Recognition" },
	"r-2460-24FF": { begin: 0x2460, end: 0x24ff, name: "Enclosed Alphanumerics" },
	"r-2500-257F": { begin: 0x2500, end: 0x257f, name: "Box Drawing" },
	"r-2580-259F": { begin: 0x2580, end: 0x259f, name: "Block Elements" },
	"r-25A0-25FF": { begin: 0x25a0, end: 0x25ff, name: "Geometric Shapes" },
	"r-2600-26FF": { begin: 0x2600, end: 0x26ff, name: "Miscellaneous Symbols" },
	"r-2700-27BF": { begin: 0x2700, end: 0x27bf, name: "Dingbats" },
	"r-27C0-27EF": { begin: 0x27c0, end: 0x27ef, name: "Miscellaneous Mathematical Symbols-A" },
	"r-27F0-27FF": { begin: 0x27f0, end: 0x27ff, name: "Supplemental Arrows-A" },
	"r-2800-28FF": { begin: 0x2800, end: 0x28ff, name: "Braille Patterns" },
	"r-2900-297F": { begin: 0x2900, end: 0x297f, name: "Supplemental Arrows-B" },
	"r-2980-29FF": { begin: 0x2980, end: 0x29ff, name: "Miscellaneous Mathematical Symbols-B" },
	"r-2A00-2AFF": { begin: 0x2a00, end: 0x2aff, name: "Supplemental Mathematical Operators" },
	"r-2B00-2BFF": { begin: 0x2b00, end: 0x2bff, name: "Miscellaneous Symbols and Arrows" },
	"r-2C00-2C5F": { begin: 0x2c00, end: 0x2c5f, name: "Glagolitic" },
	"r-2C60-2C7F": { begin: 0x2c60, end: 0x2c7f, name: "Latin Extended-C" },
	"r-2C80-2CFF": { begin: 0x2c80, end: 0x2cff, name: "Coptic" },
	"r-2D00-2D2F": { begin: 0x2d00, end: 0x2d2f, name: "Georgian Supplement" },
	"r-2D30-2D7F": { begin: 0x2d30, end: 0x2d7f, name: "Tifinagh" },
	"r-2D80-2DDF": { begin: 0x2d80, end: 0x2ddf, name: "Ethiopic Extended" },
	"r-2DE0-2DFF": { begin: 0x2de0, end: 0x2dff, name: "Cyrillic Extended-A" },
	"r-2E00-2E7F": { begin: 0x2e00, end: 0x2e7f, name: "Supplemental Punctuation" },
	"r-2E80-2EFF": { begin: 0x2e80, end: 0x2eff, name: "CJK Radicals Supplement" },
	"r-2F00-2FDF": { begin: 0x2f00, end: 0x2fdf, name: "Kangxi Radicals" },
	"r-2FF0-2FFF": { begin: 0x2ff0, end: 0x2fff, name: "Ideographic Description Characters" },
	"r-3000-303F": { begin: 0x3000, end: 0x303f, name: "CJK Symbols and Punctuation" },
	"r-3040-309F": { begin: 0x3040, end: 0x309f, name: "Hiragana" },
	"r-30A0-30FF": { begin: 0x30a0, end: 0x30ff, name: "Katakana" },
	"r-3100-312F": { begin: 0x3100, end: 0x312f, name: "Bopomofo" },
	"r-3130-318F": { begin: 0x3130, end: 0x318f, name: "Hangul Compatibility Jamo" },
	"r-3190-319F": { begin: 0x3190, end: 0x319f, name: "Kanbun" },
	"r-31A0-31BF": { begin: 0x31a0, end: 0x31bf, name: "Bopomofo Extended" },
	"r-31C0-31EF": { begin: 0x31c0, end: 0x31ef, name: "CJK Strokes" },
	"r-31F0-31FF": { begin: 0x31f0, end: 0x31ff, name: "Katakana Phonetic Extensions" },
	"r-3200-32FF": { begin: 0x3200, end: 0x32ff, name: "Enclosed CJK Letters and Months" },
	"r-3300-33FF": { begin: 0x3300, end: 0x33ff, name: "CJK Compatibility" },
	"r-3400-4DBF": { begin: 0x3400, end: 0x4dbf, name: "CJK Unified Ideographs Extension A" },
	"r-4DC0-4DFF": { begin: 0x4dc0, end: 0x4dff, name: "Yijing Hexagram Symbols" },
	"r-4E00-9FFF": { begin: 0x4e00, end: 0x9fff, name: "CJK Unified Ideographs" },
	"r-A000-A48F": { begin: 0xa000, end: 0xa48f, name: "Yi Syllables" },
	"r-A490-A4CF": { begin: 0xa490, end: 0xa4cf, name: "Yi Radicals" },
	"r-A4D0-A4FF": { begin: 0xa4d0, end: 0xa4ff, name: "Lisu" },
	"r-A500-A63F": { begin: 0xa500, end: 0xa63f, name: "Vai" },
	"r-A640-A69F": { begin: 0xa640, end: 0xa69f, name: "Cyrillic Extended-B" },
	"r-A6A0-A6FF": { begin: 0xa6a0, end: 0xa6ff, name: "Bamum" },
	"r-A700-A71F": { begin: 0xa700, end: 0xa71f, name: "Modifier Tone Letters" },
	"r-A720-A7FF": { begin: 0xa720, end: 0xa7ff, name: "Latin Extended-D" },
	"r-A800-A82F": { begin: 0xa800, end: 0xa82f, name: "Syloti Nagri", nonstandard: true },
	"r-A830-A83F": { begin: 0xa830, end: 0xa83f, name: "Common Indic Number Forms" },
	"r-A840-A87F": { begin: 0xa840, end: 0xa87f, name: "Phags-pa" },
	"r-A880-A8DF": { begin: 0xa880, end: 0xa8df, name: "Saurashtra" },
	"r-A8E0-A8FF": { begin: 0xa8e0, end: 0xa8ff, name: "Devanagari Extended" },
	"r-A900-A92F": { begin: 0xa900, end: 0xa92f, name: "Kayah Li" },
	"r-A930-A95F": { begin: 0xa930, end: 0xa95f, name: "Rejang", nonstandard: true },
	"r-A960-A97F": { begin: 0xa960, end: 0xa97f, name: "Hangul Jamo Extended-A" },
	"r-A980-A9DF": { begin: 0xa980, end: 0xa9df, name: "Javanese" },
	"r-A9E0-A9FF": { begin: 0xa9e0, end: 0xa9ff, name: "Myanmar Extended-B" },
	"r-AA00-AA5F": { begin: 0xaa00, end: 0xaa5f, name: "Cham" },
	"r-AA60-AA7F": { begin: 0xaa60, end: 0xaa7f, name: "Myanmar Extended-A" },
	"r-AA80-AADF": { begin: 0xaa80, end: 0xaadf, name: "Tai Viet", nonstandard: true },
	"r-AAE0-AAFF": { begin: 0xaae0, end: 0xaaff, name: "Meetei Mayek Extensions", nonstandard: true },
	"r-AB00-AB2F": { begin: 0xab00, end: 0xab2f, name: "Ethiopic Extended-A" },
	"r-AB30-AB6F": { begin: 0xab30, end: 0xab6f, name: "Latin Extended-E" },
	"r-AB70-ABBF": { begin: 0xab70, end: 0xabbf, name: "Cherokee Supplement" },
	"r-ABC0-ABFF": { begin: 0xabc0, end: 0xabff, name: "Meetei Mayek" },
	"r-AC00-D7AF": { begin: 0xac00, end: 0xd7af, name: "Hangul Syllables" },
	"r-D7B0-D7FF": { begin: 0xd7b0, end: 0xd7ff, name: "Hangul Jamo Extended-B" },
	"r-D800-DB7F": { begin: 0xd800, end: 0xdb7f, name: "High Surrogates", noGlyphs: true },
	"r-DB80-DBFF": { begin: 0xdb80, end: 0xdbff, name: "High Private Use Surrogates", noGlyphs: true },
	"r-DC00-DFFF": { begin: 0xdc00, end: 0xdfff, name: "Low Surrogates", noGlyphs: true },
	"r-E000-F8FF": { begin: 0xe000, end: 0xf8ff, name: "Private Use Area", noGlyphs: true },
	"r-F900-FAFF": { begin: 0xf900, end: 0xfaff, name: "CJK Compatibility Ideographs" },
	"r-FB00-FB4F": { begin: 0xfb00, end: 0xfb4f, name: "Alphabetic Presentation Forms" },
	"r-FB50-FDFF": { begin: 0xfb50, end: 0xfdff, name: "Arabic Presentation Forms-A" },
	"r-FE00-FE0F": { begin: 0xfe00, end: 0xfe0f, name: "Variation Selectors", noGlyphs: true },
	"r-FE10-FE1F": { begin: 0xfe10, end: 0xfe1f, name: "Vertical Forms" },
	"r-FE20-FE2F": { begin: 0xfe20, end: 0xfe2f, name: "Combining Half Marks" },
	"r-FE30-FE4F": { begin: 0xfe30, end: 0xfe4f, name: "CJK Compatibility Forms" },
	"r-FE50-FE6F": { begin: 0xfe50, end: 0xfe6f, name: "Small Form Variants" },
	"r-FE70-FEFF": { begin: 0xfe70, end: 0xfeff, name: "Arabic Presentation Forms-B" },
	"r-FF00-FFEF": { begin: 0xff00, end: 0xffef, name: "Halfwidth and Fullwidth Forms" },
	"r-FFF0-FFFF": { begin: 0xfff0, end: 0xffff, name: "Specials", noGlyphs: true },
	"r-10000-1007F": { begin: 0x10000, end: 0x1007f, name: "Linear B Syllabary" },
	"r-10080-100FF": { begin: 0x10080, end: 0x100ff, name: "Linear B Ideograms" },
	"r-10100-1013F": { begin: 0x10100, end: 0x1013f, name: "Aegean Numbers" },
	"r-10140-1018F": { begin: 0x10140, end: 0x1018f, name: "Ancient Greek Numbers", nonstandard: true },
	"r-10190-101CF": { begin: 0x10190, end: 0x101cf, name: "Ancient Symbols", nonstandard: true },
	"r-101D0-101FF": { begin: 0x101d0, end: 0x101ff, name: "Phaistos Disc", nonstandard: true },
	"r-10280-1029F": { begin: 0x10280, end: 0x1029f, name: "Lycian" },
	"r-102A0-102DF": { begin: 0x102a0, end: 0x102df, name: "Carian" },
	"r-102E0-102FF": { begin: 0x102e0, end: 0x102ff, name: "Coptic Epact Numbers", nonstandard: true },
	"r-10300-1032F": { begin: 0x10300, end: 0x1032f, name: "Old Italic" },
	"r-10330-1034F": { begin: 0x10330, end: 0x1034f, name: "Gothic" },
	"r-10350-1037F": { begin: 0x10350, end: 0x1037f, name: "Old Permic", nonstandard: true },
	"r-10380-1039F": { begin: 0x10380, end: 0x1039f, name: "Ugaritic" },
	"r-103A0-103DF": { begin: 0x103a0, end: 0x103df, name: "Old Persian" },
	"r-10400-1044F": { begin: 0x10400, end: 0x1044f, name: "Deseret" },
	"r-10450-1047F": { begin: 0x10450, end: 0x1047f, name: "Shavian" },
	"r-10480-104AF": { begin: 0x10480, end: 0x104af, name: "Osmanya" },
	"r-104B0-104FF": { begin: 0x104b0, end: 0x104ff, name: "Osage" },
	"r-10500-1052F": { begin: 0x10500, end: 0x1052f, name: "Elbasan" },
	"r-10530-1056F": { begin: 0x10530, end: 0x1056f, name: "Caucasian Albanian" },
	"r-10570-105BF": { begin: 0x10570, end: 0x105bf, name: "Vithkuqi", nonstandard: true },
	"r-10600-1077F": { begin: 0x10600, end: 0x1077f, name: "Linear A" },
	"r-10780-107BF": { begin: 0x10780, end: 0x107bf, name: "Latin Extended-F" },
	"r-10800-1083F": { begin: 0x10800, end: 0x1083f, name: "Cypriot Syllabary" },
	"r-10840-1085F": { begin: 0x10840, end: 0x1085f, name: "Imperial Aramaic" },
	"r-10860-1087F": { begin: 0x10860, end: 0x1087f, name: "Palmyrene" },
	"r-10880-108AF": { begin: 0x10880, end: 0x108af, name: "Nabataean" },
	"r-108E0-108FF": { begin: 0x108e0, end: 0x108ff, name: "Hatran", nonstandard: true },
	"r-10900-1091F": { begin: 0x10900, end: 0x1091f, name: "Phoenician" },
	"r-10920-1093F": { begin: 0x10920, end: 0x1093f, name: "Lydian" },
	"r-10980-1099F": { begin: 0x10980, end: 0x1099f, name: "Meroitic Hieroglyphs", nonstandard: true },
	"r-109A0-109FF": { begin: 0x109a0, end: 0x109ff, name: "Meroitic Cursive" },
	"r-10A00-10A5F": { begin: 0x10a00, end: 0x10a5f, name: "Kharoshthi" },
	"r-10A60-10A7F": { begin: 0x10a60, end: 0x10a7f, name: "Old South Arabian" },
	"r-10A80-10A9F": { begin: 0x10a80, end: 0x10a9f, name: "Old North Arabian" },
	"r-10AC0-10AFF": { begin: 0x10ac0, end: 0x10aff, name: "Manichaean" },
	"r-10B00-10B3F": { begin: 0x10b00, end: 0x10b3f, name: "Avestan" },
	"r-10B40-10B5F": { begin: 0x10b40, end: 0x10b5f, name: "Inscriptional Parthian" },
	"r-10B60-10B7F": { begin: 0x10b60, end: 0x10b7f, name: "Inscriptional Pahlavi" },
	"r-10B80-10BAF": { begin: 0x10b80, end: 0x10baf, name: "Psalter Pahlavi" },
	"r-10C00-10C4F": { begin: 0x10c00, end: 0x10c4f, name: "Old Turkic" },
	"r-10C80-10CFF": { begin: 0x10c80, end: 0x10cff, name: "Old Hungarian" },
	"r-10D00-10D3F": { begin: 0x10d00, end: 0x10d3f, name: "Hanifi Rohingya" },
	"r-10E60-10E7F": { begin: 0x10e60, end: 0x10e7f, name: "Rumi Numeral Symbols", nonstandard: true },
	"r-10E80-10EBF": { begin: 0x10e80, end: 0x10ebf, name: "Yezidi", nonstandard: true },
	"r-10EC0-10EFF": { begin: 0x10ec0, end: 0x10eff, name: "Arabic Extended-C", nonstandard: true },
	"r-10F00-10F2F": { begin: 0x10f00, end: 0x10f2f, name: "Old Sogdian" },
	"r-10F30-10F6F": { begin: 0x10f30, end: 0x10f6f, name: "Sogdian" },
	"r-10F70-10FAF": { begin: 0x10f70, end: 0x10faf, name: "Old Uyghur", nonstandard: true },
	"r-10FB0-10FDF": { begin: 0x10fb0, end: 0x10fdf, name: "Chorasmian", nonstandard: true },
	"r-10FE0-10FFF": { begin: 0x10fe0, end: 0x10fff, name: "Elymaic" },
	"r-11000-1107F": { begin: 0x11000, end: 0x1107f, name: "Brahmi" },
	"r-11080-110CF": { begin: 0x11080, end: 0x110cf, name: "Kaithi" },
	"r-110D0-110FF": { begin: 0x110d0, end: 0x110ff, name: "Sora Sompeng" },
	"r-11100-1114F": { begin: 0x11100, end: 0x1114f, name: "Chakma" },
	"r-11150-1117F": { begin: 0x11150, end: 0x1117f, name: "Mahajani" },
	"r-11180-111DF": { begin: 0x11180, end: 0x111df, name: "Sharada" },
	"r-111E0-111FF": { begin: 0x111e0, end: 0x111ff, name: "Sinhala Archaic Numbers" },
	"r-11200-1124F": { begin: 0x11200, end: 0x1124f, name: "Khojki" },
	"r-11280-112AF": { begin: 0x11280, end: 0x112af, name: "Multani" },
	"r-112B0-112FF": { begin: 0x112b0, end: 0x112ff, name: "Khudawadi" },
	"r-11300-1137F": { begin: 0x11300, end: 0x1137f, name: "Grantha", nonstandard: true },
	"r-11400-1147F": { begin: 0x11400, end: 0x1147f, name: "Newa", nonstandard: true },
	"r-11480-114DF": { begin: 0x11480, end: 0x114df, name: "Tirhuta" },
	"r-11580-115FF": { begin: 0x11580, end: 0x115ff, name: "Siddham", nonstandard: true },
	"r-11600-1165F": { begin: 0x11600, end: 0x1165f, name: "Modi" },
	"r-11660-1167F": { begin: 0x11660, end: 0x1167f, name: "Mongolian Supplement", nonstandard: true },
	"r-11680-116CF": { begin: 0x11680, end: 0x116cf, name: "Takri" },
	"r-11700-1174F": { begin: 0x11700, end: 0x1174f, name: "Ahom" },
	"r-11800-1184F": { begin: 0x11800, end: 0x1184f, name: "Dogra" },
	"r-118A0-118FF": { begin: 0x118a0, end: 0x118ff, name: "Warang Citi" },
	"r-11900-1195F": { begin: 0x11900, end: 0x1195f, name: "Dives Akuru", nonstandard: true },
	"r-119A0-119FF": { begin: 0x119a0, end: 0x119ff, name: "Nandinagari", nonstandard: true },
	"r-11A00-11A4F": { begin: 0x11a00, end: 0x11a4f, name: "Zanabazar Square" },
	"r-11A50-11AAF": { begin: 0x11a50, end: 0x11aaf, name: "Soyombo" },
	"r-11AB0-11ABF": { begin: 0x11ab0, end: 0x11abf, name: "Unified Canadian Aboriginal Syllabics Extended-A" },
	"r-11AC0-11AFF": { begin: 0x11ac0, end: 0x11aff, name: "Pau Cin Hau" },
	"r-11B00-11B5F": { begin: 0x11b00, end: 0x11b5f, name: "Devanagari Extended-A", nonstandard: true },
	"r-11C00-11C6F": { begin: 0x11c00, end: 0x11c6f, name: "Bhaiksuki", nonstandard: true },
	"r-11C70-11CBF": { begin: 0x11c70, end: 0x11cbf, name: "Marchen", nonstandard: true },
	"r-11D00-11D5F": { begin: 0x11d00, end: 0x11d5f, name: "Masaram Gondi" },
	"r-11D60-11DAF": { begin: 0x11d60, end: 0x11daf, name: "Gunjala Gondi", nonstandard: true },
	"r-11EE0-11EFF": { begin: 0x11ee0, end: 0x11eff, name: "Makasar", nonstandard: true },
	"r-11F00-11F5F": { begin: 0x11f00, end: 0x11f5f, name: "Kawi", nonstandard: true },
	"r-11FB0-11FBF": { begin: 0x11fb0, end: 0x11fbf, name: "Lisu Supplement", nonstandard: true },
	"r-11FC0-11FFF": { begin: 0x11fc0, end: 0x11fff, name: "Tamil Supplement", nonstandard: true },
	"r-12000-123FF": { begin: 0x12000, end: 0x123ff, name: "Cuneiform" },
	"r-12400-1247F": { begin: 0x12400, end: 0x1247f, name: "Cuneiform Numbers and Punctuation" },
	"r-12480-1254F": { begin: 0x12480, end: 0x1254f, name: "Early Dynastic Cuneiform", nonstandard: true },
	"r-12F90-12FFF": { begin: 0x12f90, end: 0x12fff, name: "Cypro-Minoan", nonstandard: true },
	"r-13000-1342F": { begin: 0x13000, end: 0x1342f, name: "Egyptian Hieroglyphs" },
	"r-13430-1345F": { begin: 0x13430, end: 0x1345f, name: "Egyptian Hieroglyph Format Controls" },
	"r-14400-1467F": { begin: 0x14400, end: 0x1467f, name: "Anatolian Hieroglyphs", nonstandard: true },
	"r-16800-16A3F": { begin: 0x16800, end: 0x16a3f, name: "Bamum Supplement" },
	"r-16A40-16A6F": { begin: 0x16a40, end: 0x16a6f, name: "Mro" },
	"r-16A70-16ACF": { begin: 0x16a70, end: 0x16acf, name: "Tangsa", nonstandard: true },
	"r-16AD0-16AFF": { begin: 0x16ad0, end: 0x16aff, name: "Bassa Vah", nonstandard: true },
	"r-16B00-16B8F": { begin: 0x16b00, end: 0x16b8f, name: "Pahawh Hmong", nonstandard: true },
	"r-16E40-16E9F": { begin: 0x16e40, end: 0x16e9f, name: "Medefaidrin" },
	"r-16F00-16F9F": { begin: 0x16f00, end: 0x16f9f, name: "Miao" },
	"r-16FE0-16FFF": { begin: 0x16fe0, end: 0x16fff, name: "Ideographic Symbols and Punctuation", nonstandard: true },
	"r-17000-187FF": { begin: 0x17000, end: 0x187ff, name: "Tangut" },
	"r-18800-18AFF": { begin: 0x18800, end: 0x18aff, name: "Tangut Components" },
	"r-18B00-18CFF": { begin: 0x18b00, end: 0x18cff, name: "Khitan Small Script" },
	"r-18D00-18D7F": { begin: 0x18d00, end: 0x18d7f, name: "Tangut Supplement" },
	"r-1AFF0-1AFFF": { begin: 0x1aff0, end: 0x1afff, name: "Kana Extended-B", nonstandard: true },
	"r-1B000-1B0FF": { begin: 0x1b000, end: 0x1b0ff, name: "Kana Supplement" },
	"r-1B100-1B12F": { begin: 0x1b100, end: 0x1b12f, name: "Kana Extended-A", nonstandard: true },
	"r-1B130-1B16F": { begin: 0x1b130, end: 0x1b16f, name: "Small Kana Extension", nonstandard: true },
	"r-1B170-1B2FF": { begin: 0x1b170, end: 0x1b2ff, name: "Nushu" },
	"r-1BC00-1BC9F": { begin: 0x1bc00, end: 0x1bc9f, name: "Duployan", nonstandard: true },
	"r-1BCA0-1BCAF": { begin: 0x1bca0, end: 0x1bcaf, name: "Shorthand Format Controls" },
	"r-1CF00-1CFCF": { begin: 0x1cf00, end: 0x1cfcf, name: "Znamenny Musical Notation", nonstandard: true },
	"r-1D000-1D0FF": { begin: 0x1d000, end: 0x1d0ff, name: "Byzantine Musical Symbols" },
	"r-1D100-1D1FF": { begin: 0x1d100, end: 0x1d1ff, name: "Musical Symbols" },
	"r-1D200-1D24F": { begin: 0x1d200, end: 0x1d24f, name: "Ancient Greek Musical Notation" },
	"r-1D2C0-1D2DF": { begin: 0x1d2c0, end: 0x1d2df, name: "Kaktovik Numerals" },
	"r-1D2E0-1D2FF": { begin: 0x1d2e0, end: 0x1d2ff, name: "Mayan Numerals" },
	"r-1D300-1D35F": { begin: 0x1d300, end: 0x1d35f, name: "Tai Xuan Jing Symbols" },
	"r-1D360-1D37F": { begin: 0x1d360, end: 0x1d37f, name: "Counting Rod Numerals" },
	"r-1D400-1D7FF": { begin: 0x1d400, end: 0x1d7ff, name: "Mathematical Alphanumeric Symbols" },
	"r-1D800-1DAAF": { begin: 0x1d800, end: 0x1daaf, name: "Sutton SignWriting", nonstandard: true },
	"r-1DF00-1DFFF": { begin: 0x1df00, end: 0x1dfff, name: "Latin Extended-G" },
	"r-1E000-1E02F": { begin: 0x1e000, end: 0x1e02f, name: "Glagolitic Supplement", nonstandard: true },
	"r-1E030-1E08F": { begin: 0x1e030, end: 0x1e08f, name: "Cyrillic Extended-D", nonstandard: true },
	"r-1E100-1E14F": { begin: 0x1e100, end: 0x1e14f, name: "Nyiakeng Puachue Hmong" },
	"r-1E290-1E2BF": { begin: 0x1e290, end: 0x1e2bf, name: "Toto", nonstandard: true },
	"r-1E2C0-1E2FF": { begin: 0x1e2c0, end: 0x1e2ff, name: "Wancho" },
	"r-1E4D0-1E4FF": { begin: 0x1e4d0, end: 0x1e4ff, name: "Nag Mundari", nonstandard: true },
	"r-1E7E0-1E7FF": { begin: 0x1e7e0, end: 0x1e7ff, name: "Ethiopic Extended-B", nonstandard: true },
	"r-1E800-1E8DF": { begin: 0x1e800, end: 0x1e8df, name: "Mende Kikakui" },
	"r-1E900-1E95F": { begin: 0x1e900, end: 0x1e95f, name: "Adlam" },
	"r-1EC70-1ECBF": { begin: 0x1ec70, end: 0x1ecbf, name: "Indic Siyaq Numbers", nonstandard: true },
	"r-1ED00-1ED4F": { begin: 0x1ed00, end: 0x1ed4f, name: "Ottoman Siyaq Numbers", nonstandard: true },
	"r-1EE00-1EEFF": { begin: 0x1ee00, end: 0x1eeff, name: "Arabic Mathematical Alphabetic Symbols", nonstandard: true },
	"r-1F000-1F02F": { begin: 0x1f000, end: 0x1f02f, name: "Mahjong Tiles" },
	"r-1F030-1F09F": { begin: 0x1f030, end: 0x1f09f, name: "Domino Tiles" },
	"r-1F0A0-1F0FF": { begin: 0x1f0a0, end: 0x1f0ff, name: "Playing Cards" },
	"r-1F100-1F1FF": { begin: 0x1f100, end: 0x1f1ff, name: "Enclosed Alphanumeric Supplement" },
	"r-1F200-1F2FF": { begin: 0x1f200, end: 0x1f2ff, name: "Enclosed Ideographic Supplement" },
	"r-1F300-1F5FF": { begin: 0x1f300, end: 0x1f5ff, name: "Miscellaneous Symbols and Pictographs" },
	"r-1F600-1F64F": { begin: 0x1f600, end: 0x1f64f, name: "Emoticons" },
	"r-1F650-1F67F": { begin: 0x1f650, end: 0x1f67f, name: "Ornamental Dingbats" },
	"r-1F680-1F6FF": { begin: 0x1f680, end: 0x1f6ff, name: "Transport and Map Symbols" },
	"r-1F700-1F77F": { begin: 0x1f700, end: 0x1f77f, name: "Alchemical Symbols" },
	"r-1F780-1F7FF": { begin: 0x1f780, end: 0x1f7ff, name: "Geometric Shapes Extended" },
	"r-1F800-1F8FF": { begin: 0x1f800, end: 0x1f8ff, name: "Supplemental Arrows-C" },
	"r-1F900-1F9FF": { begin: 0x1f900, end: 0x1f9ff, name: "Supplemental Symbols and Pictographs" },
	"r-1FA00-1FA6F": { begin: 0x1fa00, end: 0x1fa6f, name: "Chess Symbols", nonstandard: true },
	"r-1FA70-1FAFF": { begin: 0x1fa70, end: 0x1faff, name: "Symbols and Pictographs Extended-A" },
	"r-1FB00-1FBFF": { begin: 0x1fb00, end: 0x1fbff, name: "Symbols for Legacy Computing", nonstandard: true },
	"r-20000-2A6DF": { begin: 0x20000, end: 0x2a6df, name: "CJK Unified Ideographs Extension B" },
	"r-2A700-2B73F": { begin: 0x2a700, end: 0x2b73f, name: "CJK Unified Ideographs Extension C" },
	"r-2B740-2B81F": { begin: 0x2b740, end: 0x2b81f, name: "CJK Unified Ideographs Extension D" },
	"r-2B820-2CEAF": { begin: 0x2b820, end: 0x2ceaf, name: "CJK Unified Ideographs Extension E" },
	"r-2CEB0-2EBEF": { begin: 0x2ceb0, end: 0x2ebef, name: "CJK Unified Ideographs Extension F" },
	"r-2EBF0-2EE5F": { begin: 0x2ebf0, end: 0x2ee5f, name: "CJK Unified Ideographs Extension I", nonstandard: true },
	"r-2F800-2FA1F": { begin: 0x2f800, end: 0x2fa1f, name: "CJK Compatibility Ideographs Supplement" },
	"r-30000-3134F": { begin: 0x30000, end: 0x3134f, name: "CJK Unified Ideographs Extension G", nonstandard: true },
	"r-31350-323AF": { begin: 0x31350, end: 0x323af, name: "CJK Unified Ideographs Extension H", nonstandard: true },
};
