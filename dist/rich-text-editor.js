(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.I = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

module.exports = {
    editor: {
        mathEditor: 'Matikkaeditori',
        title: 'Kaavaeditorin ensimmäinen kehitysversio',
        description: '<ul>\n<li>Editori toimii parhaiten Firefox-selaimella.</li>\n<li>\u201CLis\xE4\xE4 kaava\u201D -napin alta l\xF6yd\xE4t yleisimpi\xE4 matematiikassa, fysiikassa ja\nkemiassa k\xE4ytett\xE4vi\xE4 merkint\xF6j\xE4. Lis\xE4ksi erikoismerkkej\xE4 voi k\xE4ytt\xE4\xE4 kaavan kirjoittamiseen.</li>\n <li>Kaavoja voi rakentaa\nklikkaamalla valikon merkint\xF6j\xE4 ja/tai kirjoittamalla LaTeXia.</li>\n <li>Editorin vastauskentt\xE4\xE4n voi kirjoittaa teksti\xE4 ja kaavoja sek\xE4\nlis\xE4t\xE4 kuvia.</li></ul>',
        shortcutTitle: 'Pikan\xE4pp\xE4invinkkej\xE4',
        shortcuts: '<table><tbody>\n<tr><th>Liit\xE4 kuva leikep\xF6yd\xE4lt\xE4</th><td>Ctrl-V</td></tr>\n<tr><th>Kirjoita kaava</th><td>Ctrl-L tai Ctrl-I</td></tr>\n<tr><th colspan="2">Kaavassa</th></tr>\n<tr><th>Jakoviiva</th><td>/</td></tr>\n<tr><th>Kertomerkki</th><td>*</td></tr>\n<tr><th>Eksponentti</th><td>^</td></tr>\n<tr><th>Sulje kaava</th><td>Ctrl-Enter tai Esc</td></tr>\n<tr><th>Lis\xE4\xE4 kaava seuraavalle riville</th><td>Enter</td></tr>\n</tbody>\n</table>',
        formatting: 'Muotoilu',
        specialCharacters: 'Erikoismerkit',
        insertEquation: 'Lisää kaava',
        close: 'sulje',
        save: 'Tallenna',
        updated: 'Päivitetty',
        sendFeedback: 'Lähetä palautetta',
        langLink: '/sv',
        langLabel: 'På svenska',
        answerTitle: 'Vastaus'
    },
    annotating: {
        sendFeedback: 'Lähetä palautetta',
        updated: 'Päivitetty',
        mathEditor: 'Matikkaeditori',
        title: 'Arvostelu',
        backLink: '/',
        backLinkLabel: 'Palaa kaavaeditoriin',
        save: 'Tallenna merkinnät',
        langLink: '/sv/bedomning',
        langLabel: 'På svenska'
    }
};

},{}],2:[function(require,module,exports){
'use strict';

module.exports = {
    editor: {
        mathEditor: 'Matematikeditor',
        title: 'Formeleditorns första utvecklingsversion',
        description: '<ul>\n<li>Editorn fungerar b\xE4st med browsern Firefox.</li>\n <li>Under knappen \u201CL\xE4gg till formel\u201D hittar du de vanligaste beteckningarna som anv\xE4nds i matematik, fysik och kemi. Dessutom kan du anv\xE4nda specialtecken f\xF6r att skriva formler.</li>\n<li>Det g\xE5r att konstruera formler genom att klicka p\xE5 beteckningarna i menyerna och/eller genom att skriva LaTeX.</li>\n<li>Det g\xE5r f\xF6rutom att skriva text och formler, att ocks\xE5 att l\xE4gga till bilder i svarsf\xE4ltet.</li></ul>',
        shortcutTitle: 'Tips p\xE5 tangentkombinationer',
        shortcuts: '<table><tbody>\n<tr><th>L\xE4gg till en bild fr\xE5n urklippet</th><td>Ctrl-V</td></tr>\n<tr><th>Skriv en formel</th><td>Ctrl-L / Ctrl-I</td></tr>\n<tr><th colspan="2">I formeln </th></tr>\n<tr><th>Br\xE5kstreck</th><td>/</td></tr>\n<tr><th>Multiplikationstecken</th><td>*</td></tr>\n<tr><th>St\xE4ng formeln</th><td>Ctrl-Enter eller Esc</td></tr>\n</tbody>\n</table>',
        formatting: 'Formatering',
        specialCharacters: 'Specialtecken',
        insertEquation: 'Lägg till formel',
        close: 'stäng',
        save: 'Spara',
        updated: 'Uppdaterad',
        sendFeedback: 'Skicka feedback',
        langLink: '/',
        langLabel: 'Suomeksi',
        answerTitle: 'Svar'
    },
    annotating: {
        sendFeedback: 'Skicka respons',
        updated: 'Uppdaterad',
        mathEditor: 'Matematikeditor',
        title: 'Bedömning',
        backLink: '/sv',
        backLinkLabel: 'Matematikeditor',
        save: 'Spara anteckningar',
        langLink: '/tarkistus',
        langLabel: 'Suomeksi'
    }
};

},{}],3:[function(require,module,exports){
'use strict';

module.exports = [{ action: '\\sqrt', label: '\\sqrt{X}' }, { action: '^', label: 'x^{X}' }, { action: '\\frac', label: '\\frac{X}{X}' }, { action: '\\int', label: '\\int_{X}^{X}' }, { action: '\\lim_', label: '\\lim_{X}' }, { action: '\\lim_{x\\rightarrow\\infty}', label: '\\lim_{x\\rightarrow\\infty}', useWrite: true }, { action: '\\overrightarrow', label: '\\overrightarrow{X}' }, { action: '_', label: 'x_X' }, { action: '\\nthroot', label: '\\sqrt[X]{X}' }, { action: '\\sum', label: '\\sum_{X}^{X}' }, { action: '\\binom', label: '\\binom{X}{X}' }, { action: '\\sin' }, { action: '\\cos' }, { action: '\\tan' }, { action: '\\vec', label: '\\vec{X}' }, { action: '\\bar', label: '\\bar{X}' }, { action: '\\overline{\\text{i}}', useWrite: true }, { action: '\\overline{\\text{j}}', useWrite: true }, { action: '\\overline{\\text{k}}', useWrite: true }, { action: '\\overleftarrow', label: '\\overleftarrow{X}' }, { action: '|', label: '|X|' }, { action: '(', label: '(X)' }, { action: '_{ }^{ } ', label: '_{X}^{X}X', useWrite: true }, { action: '\\text', label: '\\text{T}' }];

},{}],4:[function(require,module,exports){
"use strict";

module.exports = "data:image/gif;base64,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EAY7Cg04Uk48LAsDhRA8MVQPEF0GAgqYYwSRlycNcWskCkApIyEAOwAAAAAAAAAAADxiciAvPgo8Yj5XYXJuaW5nPC9iPjogIG15c3FsX3F1ZXJ5KCkgWzxhIGhyZWY9J2Z1bmN0aW9uLm15c3FsLXF1ZXJ5Jz5mdW5jdGlvbi5teXNxbC1xdWVyeTwvYT5dOiBDYW4ndCBjb25uZWN0IHRvIGxvY2FsIE15U1FMIHNlcnZlciB0aHJvdWdoIHNvY2tldCAnL3Zhci9ydW4vbXlzcWxkL215c3FsZC5zb2NrJyAoMikgaW4gPGI+L2hvbWUvYWpheGxvYWQvd3d3L2xpYnJhaXJpZXMvY2xhc3MubXlzcWwucGhwPC9iPiBvbiBsaW5lIDxiPjY4PC9iPjxiciAvPgo8YnIgLz4KPGI+V2FybmluZzwvYj46ICBteXNxbF9xdWVyeSgpIFs8YSBocmVmPSdmdW5jdGlvbi5teXNxbC1xdWVyeSc+ZnVuY3Rpb24ubXlzcWwtcXVlcnk8L2E+XTogQSBsaW5rIHRvIHRoZSBzZXJ2ZXIgY291bGQgbm90IGJlIGVzdGFibGlzaGVkIGluIDxiPi9ob21lL2FqYXhsb2FkL3d3dy9saWJyYWlyaWVzL2NsYXNzLm15c3FsLnBocDwvYj4gb24gbGluZSA8Yj42ODwvYj48YnIgLz4KPGJyIC8+CjxiPldhcm5pbmc8L2I+OiAgbXlzcWxfcXVlcnkoKSBbPGEgaHJlZj0nZnVuY3Rpb24ubXlzcWwtcXVlcnknPmZ1bmN0aW9uLm15c3FsLXF1ZXJ5PC9hPl06IENhbid0IGNvbm5lY3QgdG8gbG9jYWwgTXlTUUwgc2VydmVyIHRocm91Z2ggc29ja2V0ICcvdmFyL3J1bi9teXNxbGQvbXlzcWxkLnNvY2snICgyKSBpbiA8Yj4vaG9tZS9hamF4bG9hZC93d3cvbGlicmFpcmllcy9jbGFzcy5teXNxbC5waHA8L2I+IG9uIGxpbmUgPGI+Njg8L2I+PGJyIC8+CjxiciAvPgo8Yj5XYXJuaW5nPC9iPjogIG15c3FsX3F1ZXJ5KCkgWzxhIGhyZWY9J2Z1bmN0aW9uLm15c3FsLXF1ZXJ5Jz5mdW5jdGlvbi5teXNxbC1xdWVyeTwvYT5dOiBBIGxpbmsgdG8gdGhlIHNlcnZlciBjb3VsZCBub3QgYmUgZXN0YWJsaXNoZWQgaW4gPGI+L2hvbWUvYWpheGxvYWQvd3d3L2xpYnJhaXJpZXMvY2xhc3MubXlzcWwucGhwPC9iPiBvbiBsaW5lIDxiPjY4PC9iPjxiciAvPgo8YnIgLz4KPGI+V2FybmluZzwvYj46ICBteXNxbF9xdWVyeSgpIFs8YSBocmVmPSdmdW5jdGlvbi5teXNxbC1xdWVyeSc+ZnVuY3Rpb24ubXlzcWwtcXVlcnk8L2E+XTogQ2FuJ3QgY29ubmVjdCB0byBsb2NhbCBNeVNRTCBzZXJ2ZXIgdGhyb3VnaCBzb2NrZXQgJy92YXIvcnVuL215c3FsZC9teXNxbGQuc29jaycgKDIpIGluIDxiPi9ob21lL2FqYXhsb2FkL3d3dy9saWJyYWlyaWVzL2NsYXNzLm15c3FsLnBocDwvYj4gb24gbGluZSA8Yj42ODwvYj48YnIgLz4KPGJyIC8+CjxiPldhcm5pbmc8L2I+OiAgbXlzcWxfcXVlcnkoKSBbPGEgaHJlZj0nZnVuY3Rpb24ubXlzcWwtcXVlcnknPmZ1bmN0aW9uLm15c3FsLXF1ZXJ5PC9hPl06IEEgbGluayB0byB0aGUgc2VydmVyIGNvdWxkIG5vdCBiZSBlc3RhYmxpc2hlZCBpbiA8Yj4vaG9tZS9hamF4bG9hZC93d3cvbGlicmFpcmllcy9jbGFzcy5teXNxbC5waHA8L2I+IG9uIGxpbmUgPGI+Njg8L2I+PGJyIC8+Cg==";

},{}],5:[function(require,module,exports){
'use strict';

var u = require('./util');

var MQ = MathQuill.getInterface(2);
module.exports = { init: init };

function init($outerPlaceholder, focus, onMathFocusChanged) {
    var $mathEditorContainer = $('\n        <div class="math-editor" data-js="mathEditor">\n            <div class="math-editor-equation-field" data-js="equationField"></div>\n            <textarea class="math-editor-latex-field" data-js="latexField" placeholder="LaTex"></textarea>\n        </div>');

    $outerPlaceholder.append($mathEditorContainer);
    var $latexField = $mathEditorContainer.find('[data-js="latexField"]');
    var $equationField = $mathEditorContainer.find('[data-js="equationField"]');
    var mqEditTimeout = void 0;
    var visible = false;
    var focusChanged = null;
    //noinspection JSUnusedGlobalSymbols,JSUnusedLocalSymbols
    var mqInstance = MQ.MathField($equationField.get(0), {
        handlers: {
            edit: onMqEdit,
            enter: function enter(field) {
                closeMathEditor(true);
                setTimeout(function () {
                    return insertNewEquation('<br>');
                }, 2);
            }
        }
    });
    $equationField.on('keydown', '.mq-textarea textarea', onMqEdit).on('focus blur', '.mq-textarea textarea', function (e) {
        focus.equationField = e.type !== 'blur' && e.type !== 'focusout';
        onFocusChanged();
    });

    $latexField.keyup(onLatexUpdate).on('focus blur', function (e) {
        focus.latexField = e.type !== 'blur';
        onFocusChanged();
    });

    return {
        insertNewEquation: insertNewEquation,
        insertMath: insertMath,
        closeMathEditor: closeMathEditor,
        openMathEditor: openMathEditor,
        onFocusChanged: onFocusChanged,
        isVisible: isVisible
    };

    function isVisible() {
        return visible;
    }
    function onMqEdit() {
        clearTimeout(mqEditTimeout);
        mqEditTimeout = setTimeout(function () {
            if (focus.latexField) return;
            var latex = mqInstance.latex();
            $latexField.val(latex);
            updateMathImg($mathEditorContainer.prev(), latex);
        }, 100);
    }

    function onLatexUpdate() {
        updateMathImg($mathEditorContainer.prev(), $latexField.val());
        setTimeout(function () {
            return mqInstance.latex($latexField.val());
        }, 1);
    }

    function onFocusChanged() {
        clearTimeout(focusChanged);
        focusChanged = setTimeout(function () {
            if (!focus.latexField && !focus.equationField) closeMathEditor();
            onMathFocusChanged();
        }, 0);
    }

    function insertNewEquation() {
        var optionalMarkup = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

        window.document.execCommand('insertHTML', false, optionalMarkup + '<img data-js="new" alt="" style="display: none"/>');
        showMathEditor($('[data-js="new"]').removeAttr('data-js'));
    }

    function openMathEditor($img) {
        if (visible) closeMathEditor();
        u.setCursorAfter($img);
        showMathEditor($img);
    }

    function showMathEditor($img) {
        $img.hide();
        $img.after($mathEditorContainer);
        visible = true;
        toggleMathToolbar(true);
        setTimeout(function () {
            return mqInstance.focus();
        }, 0);
        $latexField.val($img.prop('alt'));
        onLatexUpdate();
    }

    function insertMath(symbol, alternativeSymbol, useWrite) {
        if (focus.latexField) {
            u.insertToTextAreaAtCursor($latexField.get(0), alternativeSymbol || symbol);
            onLatexUpdate();
        } else if (focus.equationField) {
            if (useWrite) {
                mqInstance.write(symbol);
            } else {
                mqInstance.typedText(symbol);
            }
            if (symbol.startsWith('\\')) mqInstance.keystroke('Tab');
            setTimeout(function () {
                return mqInstance.focus();
            }, 0);
        }
    }

    function updateMathImg($img, latex) {
        $img.prop({
            src: '/math.svg?latex=' + encodeURIComponent(latex),
            alt: latex
        });
    }

    function closeMathEditor() {
        var setFocusAfterClose = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        // TODO: remove event bindings
        var $currentEditor = $mathEditorContainer.closest('[data-js="answer"]');
        var $img = $mathEditorContainer.prev();
        if ($latexField.val().trim() === '') {
            $img.remove();
        } else {
            $img.show();
            updateMathImg($img, $latexField.val());
        }

        toggleMathToolbar(false);
        $outerPlaceholder.append($mathEditorContainer);
        visible = false;
        focus.latexField = false;
        focus.equationField = false;
        if (setFocusAfterClose) $currentEditor.focus();
    }

    function toggleMathToolbar(isVisible) {
        $('body').toggleClass('math-editor-focus', isVisible);
    }
}

},{"./util":10}],6:[function(require,module,exports){
'use strict';

var u = require('./util');
var toolbars = require('./toolbars');
var mathEditor = require('./math-editor');
var locales = {
    FI: require('./FI'),
    SV: require('./SV')
};
var l = locales[window.locale || 'FI'].editor;
var keyCodes = {
    ENTER: 13,
    ESC: 27
};
var $outerPlaceholder = $('<div class="rich-text-editor-hidden" data-js="outerPlaceholder">');
var focus = {
    richText: false,
    latexField: false,
    equationField: false
};
var $currentEditor = void 0;
var math = mathEditor.init($outerPlaceholder, focus, onMathFocusChanged);

function onMathFocusChanged() {
    if (richTextAndMathBlur()) onRichTextEditorBlur();
}

var _toolbars$init = toolbars.init(math, function () {
    return focus.richText;
}, l),
    $toolbar = _toolbars$init.$toolbar;

$('body').append($outerPlaceholder, $toolbar);

module.exports.makeRichText = function (element, options) {
    var onValueChanged = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
    var _options$screenshot = options.screenshot,
        saver = _options$screenshot.saver,
        limit = _options$screenshot.limit;

    var $answer = $(element);
    var pasteInProgress = false;

    function onPasteHtml(e, clipboardDataAsHtml) {
        e.preventDefault();
        if (u.totalImageCount($answer, clipboardDataAsHtml) <= limit) {
            window.document.execCommand('insertHTML', false, u.sanitize(clipboardDataAsHtml));
            setTimeout(function () {
                return u.persistInlineImages($currentEditor, saver, limit, onValueChanged);
            }, 0);
        } else {
            onValueChanged(u.SCREENSHOT_LIMIT_ERROR);
        }
    }

    $answer.attr({
        'contenteditable': 'true',
        'spellcheck': 'false',
        'data-js': 'answer'
    }).addClass('rich-text-editor').on('mousedown', u.equationImageSelector, function (e) {
        onRichTextEditorFocus($(e.target).closest('[data-js="answer"]'));
        math.openMathEditor($(e.target));
    }).on('keypress', function (e) {
        if (u.isCtrlKey(e, 'l') || u.isCtrlKey(e, 'i')) math.insertNewEquation();
        if (u.isCtrlKey(e, keyCodes.ENTER) || u.isKey(e, keyCodes.ESC)) math.closeMathEditor(true);
    }).on('focus blur', function (e) {
        if (math.isVisible() && e.type === 'focus') math.closeMathEditor();
        onRichTextEditorFocusChanged(e);
    }).on('keyup input', function (e) {
        if (!pasteInProgress) onValueChanged(u.sanitizeContent(e.currentTarget));
    }).on('paste', function (e) {
        pasteInProgress = true;
        setTimeout(function () {
            return pasteInProgress = false;
        }, 0);

        if (e.target.tagName === 'TEXTAREA') return;
        var clipboardData = e.originalEvent.clipboardData;
        var file = clipboardData.items && clipboardData.items[0].getAsFile();
        if (file) {
            onPasteBlob(e, file);
        } else {
            var clipboardDataAsHtml = clipboardData.getData('text/html');
            if (clipboardDataAsHtml) {
                onPasteHtml(e, clipboardDataAsHtml);
            } else {
                console.log('default', e);
                setTimeout(function () {
                    return u.persistInlineImages($currentEditor, saver, limit, onValueChanged);
                }, 0);
            }
        }
    });

    setTimeout(function () {
        return document.execCommand("enableObjectResizing", false, false);
    }, 0);

    function onPasteBlob(event, file) {
        event.preventDefault();
        if (file.type === 'image/png') {
            saver({ data: file, type: file.type, id: String(new Date().getTime()) }).then(function (screenshotUrl) {
                var img = '<img src="' + screenshotUrl + '"/>';
                window.document.execCommand('insertHTML', false, img);
            });
        }
    }
};

function toggleRichTextToolbar(isVisible) {
    $('body').toggleClass('rich-text-editor-focus', isVisible);
}
function onRichTextEditorFocus($element) {
    $currentEditor = $element;
    toggleRichTextToolbar(true);
}

function onRichTextEditorBlur() {
    toggleRichTextToolbar(false);
    math.closeMathEditor();
    focus.richText = false;
}

var richTextEditorBlurTimeout = void 0;

function onRichTextEditorFocusChanged(e) {
    focus.richText = e.type === 'focus';

    clearTimeout(richTextEditorBlurTimeout);
    richTextEditorBlurTimeout = setTimeout(function () {
        if (richTextAndMathBlur()) onRichTextEditorBlur();else if (focus.richText && math.isVisible()) math.closeMathEditor();else onRichTextEditorFocus($(e.target));
    }, 0);
}

function richTextAndMathBlur() {
    return !focus.richText && !math.isVisible() && !focus.latexField && !focus.equationField;
}

},{"./FI":1,"./SV":2,"./math-editor":5,"./toolbars":9,"./util":10}],7:[function(require,module,exports){
'use strict';

module.exports = {
    allowedTags: ['div', 'img', 'br'],
    allowedAttributes: {
        img: ['src', 'alt']
    },
    allowedSchemes: ['data', 'http', 'https'],
    exclusiveFilter: function exclusiveFilter(frame) {
        return frame.attribs['data-js'] === 'mathEditor';
    }
};

},{}],8:[function(require,module,exports){
'use strict';

module.exports = [{
    label: 'Perus',
    characters: [{ character: '≠', latexCommand: '\\neq', popular: true }, { character: '≈', latexCommand: '\\approx', popular: true }, { character: '≤', latexCommand: '\\leq', popular: true }, { character: '≥', latexCommand: '\\geq', popular: true }, { character: '²', latexCommand: '^2', popular: true }, { character: '³', latexCommand: '^3', popular: true }, { character: '½', latexCommand: '1/2', popular: true }, { character: '⅓', latexCommand: '1/3' }, { character: '±', latexCommand: '\\pm' }]
}, {
    label: 'Algebra',
    characters: [{ character: '∼', latexCommand: '\\sim' }, { character: '≡', latexCommand: '\\equiv' }, { character: '≢' }, // \nequiv or \not\equiv
    { character: '·', latexCommand: '\\cdot', popular: true }, { character: '…', latexCommand: '\\dots' }, // matriisialgebra?
    { character: '∞', latexCommand: '\\infty', popular: true }]
}, {
    label: 'Kreikkalaiset aakkoset',
    characters: [{ character: 'α', latexCommand: '\\alpha', popular: true }, { character: 'β', latexCommand: '\\beta', popular: true }, { character: 'δ', latexCommand: '\\delta' }, { character: 'ε', latexCommand: '\\varepsilon' }, { character: 'η', latexCommand: '\\eta' }, { character: '∂', latexCommand: '\\partial' }, { character: '𝜄', latexCommand: '\\iota' }, { character: 'λ', latexCommand: '\\lambda' }, { character: 'µ', latexCommand: '\\mu' }, { character: 'π', latexCommand: '\\pi', popular: true }, { character: 'σ', latexCommand: '\\sigma' }, { character: 'τ', latexCommand: '\\tau' }, { character: 'Ф', latexCommand: '\\phi' }, { character: 'ω', latexCommand: '\\omega' }, { character: 'Γ', latexCommand: '\\Gamma' }, { character: 'Δ', latexCommand: '\\Delta', popular: true }, { character: 'Θ', latexCommand: '\\Theta' }, { character: '∏', latexCommand: '\\Pi' }, { character: '∑', latexCommand: '\\Sigma', popular: true }, { character: 'Φ', latexCommand: '\\Phi' }, { character: 'Ω', latexCommand: '\\Omega' }]
}, {
    label: 'Geometria ja vektorioppi',
    characters: [{ character: '°', popular: true }, { character: '∠', latexCommand: '\\angle' }, { character: '⊥', latexCommand: '\\perp', popular: true }, { character: '‖', latexCommand: '\\parallel', popular: true }, { character: '⇅' }, { character: '↑', latexCommand: '\\uparrow' }, { character: '↓', latexCommand: '\\downarrow' }, { character: '↔', latexCommand: '\\leftrightarrow' }, { character: '⇌' } // \rightleftharpoons
    ]
}, {
    label: 'Logiikka ja joukko-oppi',
    characters: [{ character: '⇒', latexCommand: '\\Rightarrow', popular: true }, { character: '⇔', latexCommand: '\\Leftrightarrow', popular: true }, { character: '∧', latexCommand: '\\and' }, { character: '∨', latexCommand: '\\or' }, { character: '¬' }, { character: '∃', latexCommand: '\\exists', popular: true }, { character: '∀', latexCommand: '\\forall', popular: true }, { character: '∩', latexCommand: '\\cap' }, { character: '∪', latexCommand: '\\cup' }, { character: '∖', latexCommand: '\\setminus' }, { character: '⊂', latexCommand: '\\subset' }, { character: '⊄', latexCommand: '\\notsubset' }, { character: '∈', latexCommand: '\\in' }, { character: '∉', latexCommand: '\\notin' }, { character: '∅', latexCommand: '\\empty' }, { character: '→', latexCommand: '\\rightarrow' }, { character: '∘', latexCommand: '\\circ' }, { character: '∼', latexCommand: '\\sim' }, { character: 'ℝ' }, { character: 'ℕ', popular: true }, { character: 'ℤ', popular: true }, { character: 'ℚ' }]
}];

},{}],9:[function(require,module,exports){
'use strict';

var specialCharacterGroups = require('./specialCharacters');
var latexCommands = require('./latexCommands');

module.exports = {
    init: init
};

function init(mathEditor, hasRichTextFocus, l) {
    var $toolbar = $('\n        <div class="rich-text-editor-tools" data-js="tools">\n            <div class="rich-text-editor-tools-button-wrapper">\n                <div class="rich-text-editor-toolbar-wrapper">\n                    <button class="rich-text-editor-characters-expand-collapse" data-js="expandCollapseCharacters" style="z-index: 100"></button>\n                </div>\n            </div>\n            <div class="rich-text-editor-tools-row">\n                <div class="rich-text-editor-toolbar-wrapper">\n                    <div class="rich-text-editor-toolbar-characters rich-text-editor-toolbar rich-text-editor-toolbar-button-list" data-js="charactersList"></div>\n                </div>\n            </div>\n            <div class="rich-text-editor-tools-row">\n                <div class="rich-text-editor-toolbar-wrapper rich-text-editor-equation-wrapper">\n                    <div class="rich-text-editor-toolbar-equation rich-text-editor-toolbar rich-text-editor-toolbar-button-list" data-js="mathToolbar"></div>\n                </div>\n            </div>\n            <div class="rich-text-editor-tools-button-wrapper">\n                <div class="rich-text-editor-toolbar-wrapper">\n                    <button class="rich-text-editor-new-equation rich-text-editor-button rich-text-editor-button-action" data-js="newEquation" data-command="Ctrl-L">\u03A3 ' + l.insertEquation + '</button>\n                </div>\n            </div>\n        </div>\n        ').on('mousedown', '[data-js="expandCollapseCharacters"]', function (e) {
        e.preventDefault();
        $toolbar.toggleClass('rich-text-editor-characters-expanded');
    });

    var $newEquation = $toolbar.find('[data-js="newEquation"]');
    var $mathToolbar = $toolbar.find('[data-js="mathToolbar"]');
    initSpecialCharacterToolbar($toolbar, mathEditor, hasRichTextFocus);
    initMathToolbar($mathToolbar, mathEditor);
    initNewEquation($newEquation, mathEditor, hasRichTextFocus);

    return { $toolbar: $toolbar };
}

var specialCharacterToButton = function specialCharacterToButton(char) {
    return '<button class="rich-text-editor-button rich-text-editor-button-grid' + (char.popular ? ' rich-text-editor-characters-popular' : '') + '" ' + (char.latexCommand ? 'data-command="' + char.latexCommand + '"' : '') + '>' + char.character + '</button>';
};

var popularInGroup = function popularInGroup(group) {
    return group.characters.filter(function (character) {
        return character.popular;
    }).length;
};

function initSpecialCharacterToolbar($toolbar, mathEditor, hasAnswerFocus) {
    var gridButtonWidthPx = 35;

    $toolbar.find('[data-js="charactersList"]').append(specialCharacterGroups.map(function (group) {
        return '<div class="rich-text-editor-toolbar-characters-group" \n                  style="width: ' + popularInGroup(group) * gridButtonWidthPx + 'px">\n                  ' + group.characters.map(specialCharacterToButton).join('') + '\n             </div>';
    })).on('mousedown', 'button', function (e) {
        e.preventDefault();

        var character = e.currentTarget.innerText;
        var command = e.currentTarget.dataset.command;
        if (hasAnswerFocus()) window.document.execCommand('insertText', false, character);else mathEditor.insertMath(command || character);
    });
}

function initMathToolbar($mathToolbar, mathEditor) {
    $mathToolbar.append(latexCommands.map(function (o) {
        return '<button class="rich-text-editor-button rich-text-editor-button-grid" data-command="' + o.action + '" data-latexcommand="' + o.label + '" data-usewrite="' + (o.useWrite || false) + '">\n<img src="/math.svg?latex=' + encodeURIComponent(o.label ? o.label.replace(/X/g, '\\square') : o.action) + '"/>\n</button>';
    }).join('')).on('mousedown', 'button', function (e) {
        e.preventDefault();
        var dataset = e.currentTarget.dataset;
        mathEditor.insertMath(dataset.command, dataset.latexcommand, dataset.usewrite === 'true');
    });
}

function initNewEquation($newEquation, mathEditor, hasAnswerFocus) {
    $newEquation.mousedown(function (e) {
        e.preventDefault();
        if (!hasAnswerFocus()) return; // TODO: remove when button is only visible when textarea has focus
        mathEditor.insertNewEquation();
    }.bind(this));
}

},{"./latexCommands":3,"./specialCharacters":8}],10:[function(require,module,exports){
(function (Buffer){
'use strict';

var sanitizeHtml = require('sanitize-html');
var sanitizeOpts = require('./sanitizeOpts');
var loadingImg = require('./loadingImg');
var equationImageSelector = 'img[src^="/math.svg"]';

var SCREENSHOT_LIMIT_ERROR = new Bacon.Error('Screenshot limit reached!');
module.exports = { isKey: isKey, isCtrlKey: isCtrlKey, insertToTextAreaAtCursor: insertToTextAreaAtCursor, persistInlineImages: persistInlineImages, sanitize: sanitize, sanitizeContent: sanitizeContent, setCursorAfter: setCursorAfter, equationImageSelector: equationImageSelector, totalImageCount: totalImageCount, SCREENSHOT_LIMIT_ERROR: SCREENSHOT_LIMIT_ERROR };

function sanitize(html) {
    return sanitizeHtml(html, sanitizeOpts);
}
function insertToTextAreaAtCursor(field, value) {
    var startPos = field.selectionStart;
    var endPos = field.selectionEnd;
    var oldValue = field.value;
    field.value = oldValue.substring(0, startPos) + value + oldValue.substring(endPos, oldValue.length);
    field.selectionStart = field.selectionEnd = startPos + value.length;
}

function decodeBase64Image(dataString) {
    if (!dataString) return null;
    var matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
    if (matches.length !== 3) {
        return null;
    }
    return {
        type: matches[1],
        data: new Buffer(matches[2], 'base64')
    };
}

function isKey(e, key) {
    return preventIfTrue(e, !e.altKey && !e.shiftKey && !e.ctrlKey && keyOrKeyCode(e, key));
}

function isCtrlKey(e, key) {
    return preventIfTrue(e, !e.altKey && !e.shiftKey && e.ctrlKey && keyOrKeyCode(e, key));
}

function keyOrKeyCode(e, val) {
    return typeof val === 'string' ? e.key === val : e.keyCode === val;
}
function preventIfTrue(e, val) {
    if (val) e.preventDefault();
    return val;
}

function sanitizeContent(answerElement) {
    var $answerElement = $(answerElement);
    var $mathEditor = $answerElement.find('[data-js="mathEditor"]');
    $mathEditor.hide();
    var text = $answerElement.text();
    $mathEditor.show();

    var html = sanitize($answerElement.html());

    return { answerHTML: html, answerText: text };
}

function setCursorAfter($img) {
    var range = document.createRange();
    var img = $img.get(0);
    var nextSibling = img.nextSibling && img.nextSibling.tagName === 'BR' ? img.nextSibling : img;
    range.setStart(nextSibling, 0);
    range.setEnd(nextSibling, 0);
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
}

function markAndGetInlineImages($editor) {
    var images = $editor.find('img[src^="data"]').toArray().map(function (el, index) {
        return Object.assign(decodeBase64Image(el.getAttribute('src')), {
            $el: $(el)
        });
    });
    images.filter(function (_ref) {
        var type = _ref.type;
        return type !== 'image/png';
    }).forEach(function (_ref2) {
        var $el = _ref2.$el;
        return $el.remove();
    });
    var pngImages = images.filter(function (_ref3) {
        var type = _ref3.type;
        return type === 'image/png';
    });
    pngImages.forEach(function (_ref4) {
        var $el = _ref4.$el;
        return $el.attr('src', loadingImg);
    });
    return pngImages;
}

function existingScreenshotCount($editor) {
    var imageCount = $editor.find('img').length;
    var equationCount = $editor.find(equationImageSelector).length;
    return imageCount - equationCount;
}

function checkForImageLimit($editor, imageData, limit) {
    return Bacon.once(existingScreenshotCount($editor) > limit ? new Bacon.Error() : imageData);
}

function persistInlineImages($editor, screenshotSaver, screenshotCountLimit, onValueChanged) {
    Bacon.combineAsArray(markAndGetInlineImages($editor).map(function (data) {
        return checkForImageLimit($editor, data, screenshotCountLimit).doError(function () {
            return onValueChanged(SCREENSHOT_LIMIT_ERROR);
        }).flatMapLatest(function () {
            return Bacon.fromPromise(screenshotSaver(data));
        }).doAction(function (screenShotUrl) {
            return data.$el.attr('src', screenShotUrl);
        }).doError(function () {
            return data.$el.remove();
        });
    })).onValue(function (k) {
        return $editor.trigger('input');
    });
}

function totalImageCount($answer, clipboardDataAsHtml) {
    return existingScreenshotCount($answer) + existingScreenshotCount($('<div>' + clipboardDataAsHtml + '</div>'));
}

}).call(this,require("buffer").Buffer)

},{"./loadingImg":4,"./sanitizeOpts":7,"buffer":undefined,"sanitize-html":undefined}]},{},[6])(6)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvRkkuanMiLCJhcHAvU1YuanMiLCJhcHAvbGF0ZXhDb21tYW5kcy5qcyIsImFwcC9sb2FkaW5nSW1nLmpzIiwiYXBwL21hdGgtZWRpdG9yLmpzIiwiYXBwL3JpY2gtdGV4dC1lZGl0b3IuanMiLCJhcHAvc2FuaXRpemVPcHRzLmpzIiwiYXBwL3NwZWNpYWxDaGFyYWN0ZXJzLmpzIiwiYXBwL3Rvb2xiYXJzLmpzIiwiYXBwL3V0aWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLE9BQU8sT0FBUCxHQUFpQjtBQUNiLFlBQVE7QUFDSixvQkFBWSxnQkFEUjtBQUVKLGVBQU8seUNBRkg7QUFHSixraEJBSEk7QUFXSixxREFYSTtBQVlKLDRkQVpJO0FBdUJKLG9CQUFZLFVBdkJSO0FBd0JKLDJCQUFtQixlQXhCZjtBQXlCSix3QkFBZ0IsYUF6Qlo7QUEwQkosZUFBTyxPQTFCSDtBQTJCSixjQUFNLFVBM0JGO0FBNEJKLGlCQUFTLFlBNUJMO0FBNkJKLHNCQUFjLG1CQTdCVjtBQThCSixrQkFBVSxLQTlCTjtBQStCSixtQkFBVyxZQS9CUDtBQWdDSixxQkFBYTtBQWhDVCxLQURLO0FBbUNiLGdCQUFZO0FBQ1Isc0JBQWMsbUJBRE47QUFFUixpQkFBUyxZQUZEO0FBR1Isb0JBQVksZ0JBSEo7QUFJUixlQUFPLFdBSkM7QUFLUixrQkFBVSxHQUxGO0FBTVIsdUJBQWUsc0JBTlA7QUFPUixjQUFNLG9CQVBFO0FBUVIsa0JBQVUsZUFSRjtBQVNSLG1CQUFXO0FBVEg7QUFuQ0MsQ0FBakI7Ozs7O0FDQUEsT0FBTyxPQUFQLEdBQWlCO0FBQ2IsWUFBUTtBQUNKLG9CQUFZLGlCQURSO0FBRUosZUFBTywwQ0FGSDtBQUdKLDZoQkFISTtBQVFKLHdEQVJJO0FBU0osb1lBVEk7QUFrQkosb0JBQVksYUFsQlI7QUFtQkosMkJBQW1CLGVBbkJmO0FBb0JKLHdCQUFnQixrQkFw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QkFBdkQsRUFBNkUsY0FBN0UsRUFBNkY7QUFDekYsVUFBTSxjQUFOLENBQXFCLHVCQUF1QixPQUF2QixFQUNoQixHQURnQixDQUNaO0FBQUEsZUFBUSxtQkFBbUIsT0FBbkIsRUFBNEIsSUFBNUIsRUFBa0Msb0JBQWxDLEVBQ1IsT0FEUSxDQUNBO0FBQUEsbUJBQU0sZUFBZSxzQkFBZixDQUFOO0FBQUEsU0FEQSxFQUVSLGFBRlEsQ0FFTTtBQUFBLG1CQUFNLE1BQU0sV0FBTixDQUFrQixnQkFBZ0IsSUFBaEIsQ0FBbEIsQ0FBTjtBQUFBLFNBRk4sRUFHUixRQUhRLENBR0M7QUFBQSxtQkFBaUIsS0FBSyxHQUFMLENBQVMsSUFBVCxDQUFjLEtBQWQsRUFBcUIsYUFBckIsQ0FBakI7QUFBQSxTQUhELEVBSVIsT0FKUSxDQUlBO0FBQUEsbUJBQU0sS0FBSyxHQUFMLENBQVMsTUFBVCxFQUFOO0FBQUEsU0FKQSxDQUFSO0FBQUEsS0FEWSxDQUFyQixFQU1FLE9BTkYsQ0FNVTtBQUFBLGVBQUssUUFBUSxPQUFSLENBQWdCLE9BQWhCLENBQUw7QUFBQSxLQU5WO0FBT0g7O0FBRUQsU0FBUyxlQUFULENBQXlCLE9BQXpCLEVBQWtDLG1CQUFsQyxFQUF1RDtBQUNuRCxXQUFPLHdCQUF3QixPQUF4QixJQUFtQyx3QkFBd0IsWUFBVSxtQkFBVixZQUF4QixDQUExQztBQUNIIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGVkaXRvcjoge1xuICAgICAgICBtYXRoRWRpdG9yOiAnTWF0aWtrYWVkaXRvcmknLFxuICAgICAgICB0aXRsZTogJ0thYXZhZWRpdG9yaW4gZW5zaW1tw6RpbmVuIGtlaGl0eXN2ZXJzaW8nLFxuICAgICAgICBkZXNjcmlwdGlvbjogYDx1bD5cbjxsaT5FZGl0b3JpIHRvaW1paSBwYXJoYWl0ZW4gRmlyZWZveC1zZWxhaW1lbGxhLjwvbGk+XG48bGk+4oCcTGlzw6TDpCBrYWF2YeKAnSAtbmFwaW4gYWx0YSBsw7Z5ZMOkdCB5bGVpc2ltcGnDpCBtYXRlbWF0aWlrYXNzYSwgZnlzaWlrYXNzYSBqYVxua2VtaWFzc2Ega8OkeXRldHTDpHZpw6QgbWVya2ludMO2asOkLiBMaXPDpGtzaSBlcmlrb2lzbWVya2tlasOkIHZvaSBrw6R5dHTDpMOkIGthYXZhbiBraXJqb2l0dGFtaXNlZW4uPC9saT5cbiA8bGk+S2Fhdm9qYSB2b2kgcmFrZW50YWFcbmtsaWtrYWFtYWxsYSB2YWxpa29uIG1lcmtpbnTDtmrDpCBqYS90YWkga2lyam9pdHRhbWFsbGEgTGFUZVhpYS48L2xpPlxuIDxsaT5FZGl0b3JpbiB2YXN0YXVza2VudHTDpMOkbiB2b2kga2lyam9pdHRhYSB0ZWtzdGnDpCBqYSBrYWF2b2phIHNla8OkXG5saXPDpHTDpCBrdXZpYS48L2xpPjwvdWw+YCxcbiAgICAgICAgc2hvcnRjdXRUaXRsZTogYFBpa2Fuw6RwcMOkaW52aW5ra2Vqw6RgLFxuICAgICAgICBzaG9ydGN1dHM6IGA8dGFibGU+PHRib2R5PlxuPHRyPjx0aD5MaWl0w6Qga3V2YSBsZWlrZXDDtnlkw6RsdMOkPC90aD48dGQ+Q3RybC1WPC90ZD48L3RyPlxuPHRyPjx0aD5LaXJqb2l0YSBrYWF2YTwvdGg+PHRkPkN0cmwtTCB0YWkgQ3RybC1JPC90ZD48L3RyPlxuPHRyPjx0aCBjb2xzcGFuPVwiMlwiPkthYXZhc3NhPC90aD48L3RyPlxuPHRyPjx0aD5KYWtvdmlpdmE8L3RoPjx0ZD4vPC90ZD48L3RyPlxuPHRyPjx0aD5LZXJ0b21lcmtraTwvdGg+PHRkPio8L3RkPjwvdHI+XG48dHI+PHRoPkVrc3BvbmVudHRpPC90aD48dGQ+XjwvdGQ+PC90cj5cbjx0cj48dGg+U3VsamUga2FhdmE8L3RoPjx0ZD5DdHJsLUVudGVyIHRhaSBFc2M8L3RkPjwvdHI+XG48dHI+PHRoPkxpc8Okw6Qga2FhdmEgc2V1cmFhdmFsbGUgcml2aWxsZTwvdGg+PHRkPkVudGVyPC90ZD48L3RyPlxuPC90Ym9keT5cbjwvdGFibGU+YCxcbiAgICAgICAgZm9ybWF0dGluZzogJ011b3RvaWx1JyxcbiAgICAgICAgc3BlY2lhbENoYXJhY3RlcnM6ICdFcmlrb2lzbWVya2l0JyxcbiAgICAgICAgaW5zZXJ0RXF1YXRpb246ICdMaXPDpMOkIGthYXZhJyxcbiAgICAgICAgY2xvc2U6ICdzdWxqZScsXG4gICAgICAgIHNhdmU6ICdUYWxsZW5uYScsXG4gICAgICAgIHVwZGF0ZWQ6ICdQw6Rpdml0ZXR0eScsXG4gICAgICAgIHNlbmRGZWVkYmFjazogJ0zDpGhldMOkIHBhbGF1dGV0dGEnLFxuICAgICAgICBsYW5nTGluazogJy9zdicsXG4gICAgICAgIGxhbmdMYWJlbDogJ1DDpSBzdmVuc2thJyxcbiAgICAgICAgYW5zd2VyVGl0bGU6ICdWYXN0YXVzJ1xuICAgIH0sXG4gICAgYW5ub3RhdGluZzoge1xuICAgICAgICBzZW5kRmVlZGJhY2s6ICdMw6RoZXTDpCBwYWxhdXRldHRhJyxcbiAgICAgICAgdXBkYXRlZDogJ1DDpGl2aXRldHR5JyxcbiAgICAgICAgbWF0aEVkaXRvcjogJ01hdGlra2FlZGl0b3JpJyxcbiAgICAgICAgdGl0bGU6ICdBcnZvc3RlbHUnLFxuICAgICAgICBiYWNrTGluazogJy8nLFxuICAgICAgICBiYWNrTGlua0xhYmVsOiAnUGFsYWEga2FhdmFlZGl0b3JpaW4nLFxuICAgICAgICBzYXZlOiAnVGFsbGVubmEgbWVya2lubsOkdCcsXG4gICAgICAgIGxhbmdMaW5rOiAnL3N2L2JlZG9tbmluZycsXG4gICAgICAgIGxhbmdMYWJlbDogJ1DDpSBzdmVuc2thJ1xuICAgIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGVkaXRvcjoge1xuICAgICAgICBtYXRoRWRpdG9yOiAnTWF0ZW1hdGlrZWRpdG9yJyxcbiAgICAgICAgdGl0bGU6ICdGb3JtZWxlZGl0b3JucyBmw7Zyc3RhIHV0dmVja2xpbmdzdmVyc2lvbicsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBgPHVsPlxuPGxpPkVkaXRvcm4gZnVuZ2VyYXIgYsOkc3QgbWVkIGJyb3dzZXJuIEZpcmVmb3guPC9saT5cbiA8bGk+VW5kZXIga25hcHBlbiDigJxMw6RnZyB0aWxsIGZvcm1lbOKAnSBoaXR0YXIgZHUgZGUgdmFubGlnYXN0ZSBiZXRlY2tuaW5nYXJuYSBzb20gYW52w6RuZHMgaSBtYXRlbWF0aWssIGZ5c2lrIG9jaCBrZW1pLiBEZXNzdXRvbSBrYW4gZHUgYW52w6RuZGEgc3BlY2lhbHRlY2tlbiBmw7ZyIGF0dCBza3JpdmEgZm9ybWxlci48L2xpPlxuPGxpPkRldCBnw6VyIGF0dCBrb25zdHJ1ZXJhIGZvcm1sZXIgZ2Vub20gYXR0IGtsaWNrYSBww6UgYmV0ZWNrbmluZ2FybmEgaSBtZW55ZXJuYSBvY2gvZWxsZXIgZ2Vub20gYXR0IHNrcml2YSBMYVRlWC48L2xpPlxuPGxpPkRldCBnw6VyIGbDtnJ1dG9tIGF0dCBza3JpdmEgdGV4dCBvY2ggZm9ybWxlciwgYXR0IG9ja3PDpSBhdHQgbMOkZ2dhIHRpbGwgYmlsZGVyIGkgc3ZhcnNmw6RsdGV0LjwvbGk+PC91bD5gLFxuICAgICAgICBzaG9ydGN1dFRpdGxlOiBgVGlwcyBww6UgdGFuZ2VudGtvbWJpbmF0aW9uZXJgLFxuICAgICAgICBzaG9ydGN1dHM6IGA8dGFibGU+PHRib2R5PlxuPHRyPjx0aD5Mw6RnZyB0aWxsIGVuIGJpbGQgZnLDpW4gdXJrbGlwcGV0PC90aD48dGQ+Q3RybC1WPC90ZD48L3RyPlxuPHRyPjx0aD5Ta3JpdiBlbiBmb3JtZWw8L3RoPjx0ZD5DdHJsLUwgLyBDdHJsLUk8L3RkPjwvdHI+XG48dHI+PHRoIGNvbHNwYW49XCIyXCI+SSBmb3JtZWxuIDwvdGg+PC90cj5cbjx0cj48dGg+QnLDpWtzdHJlY2s8L3RoPjx0ZD4vPC90ZD48L3RyPlxuPHRyPjx0aD5NdWx0aXBsaWthdGlvbnN0ZWNrZW48L3RoPjx0ZD4qPC90ZD48L3RyPlxuPHRyPjx0aD5TdMOkbmcgZm9ybWVsbjwvdGg+PHRkPkN0cmwtRW50ZXIgZWxsZXIgRXNjPC90ZD48L3RyPlxuPC90Ym9keT5cbjwvdGFibGU+YCxcbiAgICAgICAgZm9ybWF0dGluZzogJ0Zvcm1hdGVyaW5nJyxcbiAgICAgICAgc3BlY2lhbENoYXJhY3RlcnM6ICdTcGVjaWFsdGVja2VuJyxcbiAgICAgICAgaW5zZXJ0RXF1YXRpb246ICdMw6RnZyB0aWxsIGZvcm1lbCcsXG4gICAgICAgIGNsb3NlOiAnc3TDpG5nJyxcbiAgICAgICAgc2F2ZTogJ1NwYXJhJyxcbiAgICAgICAgdXBkYXRlZDogJ1VwcGRhdGVyYWQnLFxuICAgICAgICBzZW5kRmVlZGJhY2s6ICdTa2lja2EgZmVlZGJhY2snLFxuICAgICAgICBsYW5nTGluazogJy8nLFxuICAgICAgICBsYW5nTGFiZWw6ICdTdW9tZWtzaScsXG4gICAgICAgIGFuc3dlclRpdGxlOiAnU3ZhcidcbiAgICB9LFxuICAgIGFubm90YXRpbmc6IHtcbiAgICAgICAgc2VuZEZlZWRiYWNrOiAnU2tpY2thIHJlc3BvbnMnLFxuICAgICAgICB1cGRhdGVkOiAnVXBwZGF0ZXJhZCcsXG4gICAgICAgIG1hdGhFZGl0b3I6ICdNYXRlbWF0aWtlZGl0b3InLFxuICAgICAgICB0aXRsZTogJ0JlZMO2bW5pbmcnLFxuICAgICAgICBiYWNrTGluazogJy9zdicsXG4gICAgICAgIGJhY2tMaW5rTGFiZWw6ICdNYXRlbWF0aWtlZGl0b3InLFxuICAgICAgICBzYXZlOiAnU3BhcmEgYW50ZWNrbmluZ2FyJyxcbiAgICAgICAgbGFuZ0xpbms6ICcvdGFya2lzdHVzJyxcbiAgICAgICAgbGFuZ0xhYmVsOiAnU3VvbWVrc2knXG4gICAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBbXG4gICAge2FjdGlvbjogJ1xcXFxzcXJ0JywgbGFiZWw6ICdcXFxcc3FydHtYfSd9LFxuICAgIHthY3Rpb246ICdeJywgbGFiZWw6ICd4XntYfSd9LFxuICAgIHthY3Rpb246ICdcXFxcZnJhYycsIGxhYmVsOiAnXFxcXGZyYWN7WH17WH0nfSxcbiAgICB7YWN0aW9uOiAnXFxcXGludCcsIGxhYmVsOiAnXFxcXGludF97WH1ee1h9J30sXG4gICAge2FjdGlvbjogJ1xcXFxsaW1fJywgbGFiZWw6ICdcXFxcbGltX3tYfSd9LFxuICAgIHthY3Rpb246ICdcXFxcbGltX3t4XFxcXHJpZ2h0YXJyb3dcXFxcaW5mdHl9JywgbGFiZWw6ICdcXFxcbGltX3t4XFxcXHJpZ2h0YXJyb3dcXFxcaW5mdHl9JywgdXNlV3JpdGU6dHJ1ZX0sXG4gICAge2FjdGlvbjogJ1xcXFxvdmVycmlnaHRhcnJvdycsIGxhYmVsOiAnXFxcXG92ZXJyaWdodGFycm93e1h9J30sXG4gICAge2FjdGlvbjogJ18nLCBsYWJlbDogJ3hfWCd9LFxuICAgIHthY3Rpb246ICdcXFxcbnRocm9vdCcsIGxhYmVsOiAnXFxcXHNxcnRbWF17WH0nfSxcbiAgICB7YWN0aW9uOiAnXFxcXHN1bScsIGxhYmVsOiAnXFxcXHN1bV97WH1ee1h9J30sXG4gICAge2FjdGlvbjogJ1xcXFxiaW5vbScsIGxhYmVsOiAnXFxcXGJpbm9te1h9e1h9J30sXG4gICAge2FjdGlvbjogJ1xcXFxzaW4nfSxcbiAgICB7YWN0aW9uOiAnXFxcXGNvcyd9LFxuICAgIHthY3Rpb246ICdcXFxcdGFuJ30sXG4gICAge2FjdGlvbjogJ1xcXFx2ZWMnLCBsYWJlbDogJ1xcXFx2ZWN7WH0nfSxcbiAgICB7YWN0aW9uOiAnXFxcXGJhcicsIGxhYmVsOiAnXFxcXGJhcntYfSd9LFxuICAgIHthY3Rpb246ICdcXFxcb3ZlcmxpbmV7XFxcXHRleHR7aX19JywgdXNlV3JpdGU6IHRydWV9LFxuICAgIHthY3Rpb246ICdcXFxcb3ZlcmxpbmV7XFxcXHRleHR7an19JywgdXNlV3JpdGU6IHRydWV9LFxuICAgIHthY3Rpb246ICdcXFxcb3ZlcmxpbmV7XFxcXHRleHR7a319JywgdXNlV3JpdGU6IHRydWV9LFxuICAgIHthY3Rpb246ICdcXFxcb3ZlcmxlZnRhcnJvdycsIGxhYmVsOiAnXFxcXG92ZXJsZWZ0YXJyb3d7WH0nfSxcbiAgICB7YWN0aW9uOiAnfCcsIGxhYmVsOiAnfFh8J30sXG4gICAge2FjdGlvbjogJygnLCBsYWJlbDogJyhYKSd9LFxuICAgIHthY3Rpb246ICdfeyB9XnsgfSAnLCBsYWJlbDogJ197WH1ee1h9WCcsIHVzZVdyaXRlOiB0cnVlfSxcbiAgICB7YWN0aW9uOiAnXFxcXHRleHQnLCBsYWJlbDogJ1xcXFx0ZXh0e1R9J30sXG5dXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoRUFBUUFQUUFBUC8vL3dBQUFQRHc4SXFLaXVEZzRFWkdSbnA2ZWdBQUFGaFlXQ1FrSkt5c3JMNit2aFFVRkp5Y25BUUVCRFkyTm1ob2FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFDSCtHa055WldGMFpXUWdkMmwwYUNCaGFtRjRiRzloWkM1cGJtWnZBQ0g1QkFBS0FBQUFJZjhMVGtWVVUwTkJVRVV5TGpBREFRQUFBQ3dBQUFBQUVBQVFBQUFGZHlBZ0FnSUpJZVdvQWtSQ0NNZEJrS3RJSEluZ3lNS3NFclBCWWJBRHBrU0N3aERtUUNCZXRoUkI2Vmo0a0ZDa1FQRzRJbFdEZ3JOUkl3bk80VUtCWER1ZnpRdkRNYW9TREJnRmI4ODZNaVFhZGdOQUJBb2tmQ3d6QkE4TENnMEVnbDhqQWdnR0FBMWtCSUExQkFZemx5SUxjelVMQzJVaEFDSDVCQUFLQUFFQUxBQUFBQUFRQUJBQUFBVjJJQ0FDQW1sQVpUbU9SRUVJeVVFUWpMS0t4UEhBRGhFdnF4bGdjR2drR0kxRFlTVkFJQVdNeCtsd1NLa0lDSjBRc0hpOVJnS0J3blZUaVJRUWd3RjRJNFVGRFFRRXdpNi8zWVNHV1JSbWpoRUVUQUpmSWdNRkNuQUtNMEtEVjRFRUVBUUxpRjE4VEFZTlhEYVNlM3g2bWppZE4xczNJUUFoK1FRQUNnQUNBQ3dBQUFBQUVBQVFBQUFGZUNBZ0FnTFpER1U1amdSRUNFVWlDSSt5aW9TRHdESnlMS3NYb0hGUXhCU0hBb0FBRkJocXRNSmc4RGdRQmdmckVzSkFFQWc0WWhaSUVpd2dLdEhpTUJndHBnM3diVVpYR083a09iMU1VS1JGTXlzQ0NoQW9nZ0pDSWcwR0MyYU5lNGdxUWxkZkw0bC9BZzFBWHlTSmduNUxjb0UzUVhJM0lRQWgrUVFBQ2dBREFDd0FBQUFBRUFBUUFBQUZkaUFnQWdMWk5HVTVqb1FoQ0VqeElzc3FFbzhiQzlCUmp5OUFnN0dJTFE0UUVvRTBnQkFFQmNPcGNCQTBEb3hTSy9lOExSSUhuK2kxY0swSXlLZGcwVkFvbGpZSWcrR2duUnJ3VlMvOElBa0lDeW9zQklRcEJBTW9LeTlkSW14UGhTK0dLa0Zya1grVGlndExsSXlLWFVGK05qYWdOaUVBSWZrRUFBb0FCQUFzQUFBQUFCQUFFQUFBQld3Z0lBSUNhUmhsT1k0RUlnakg4UjdMS2hLSEd3c012YjRBQXkzV09EQklCQktDc1lBOVRqdWhETkRLRVZTRVJlelFFTDBXcmhYdWNSVVFHdWlrN2JGbG5nenFWVzlMTWw5WFd2TGRqRmFKdERGcVoxY0VaVUIwZFVndkwzZGdQNFdKWm40amtvbVdOcFNUSXlFQUlma0VBQW9BQlFBc0FBQUFBQkFBRUFBQUJYNGdJQUlDdVN4bE9ZNkNJZ2lEOFJyRUtncUdPd3h3VXJNbEFvU3dJekFHcEpwZ29TREFHaWZEWTVrb3BCWURsRXBBUUJ3ZXZ4ZkJ0UklVR2k4eHdXa0ROQkNJd21DOVZxMGFpUVFEUXVLK1ZnUVBEWFY5aENKakJ3Y0ZZVTVwTHd3SFhRY01LU21OTFFjSUFFeGxiSDhKQnd0dGFYMEFCQWNOYldWYkt5RUFJZmtFQUFvQUJnQXNBQUFBQUJBQUVBQUFCWGtnSUFJQ1NSQmxPWTdDSWdoTjh6YkVLc0tvSWpkRnpaYUVnVUJIS0NoTUp0UndjV3BBV29XbmlmbTZFU0FNaE84bFFLMEVFQVYzckZvcElCQ0VjR3dES0FxUGg0SFVyWTRJQ0hIMWRTb1RGZ2NIVWlaakJoQUpCMkFIRHlrcEtBd0hBd2R6ZjE5S2tBU0lQbDljRGdjbkRrZHROd2lNSkNzaEFDSDVCQUFLQUFjQUxBQUFBQUFRQUJBQUFBVjNJQ0FDQWtrUVpUbU9BaW9zaXlBb3hDcStLUHhDTlZzU01SZ0JzaUNsV3JMVFNXRm9JUVpIbDZwbGVCaDZzdXhLTUlobHZ6YkF3a0JXZkZXckJRVHhOTHEyUkcyeWhTVWtEczJiNjNBWURBb0pYQWNGUndBRGVBa0pEWDBBUUNzRWZBUU1EQUlQQnowckNnY3hreTBKUldFMUFtd3BLeUVBSWZrRUFBb0FDQUFzQUFBQUFCQUFFQUFBQlhrZ0lBSUNLWnprcUo0blFaeExxWkt2NE5xTkxLSzIvUTRFazRsRlhDaHNnNXlwSmpzMUlJM2dFRFVTUkluRUdZQXc2QjZ6TTRKaHJEQXRFb3NWa0xVdEhBN1JIYUhBR0pRRWpzT0RjRWcwRkJBRlZna1FKUTFwQXdjRER3OEtjRnRTSW53SkFvd0NDQTZSSXdxWkFna1BOZ1ZwV25kamR5b2hBQ0g1QkFBS0FBa0FMQUFBQUFBUUFCQUFBQVY1SUNBQ0FpbWM1S2llTEV1VUt2bTJ4QUtMcURDZkMyR2FPOWVMMExBQldUaUJZbUEwNlc2a0hndkNxRUppQUlKaXUzZ2N2Z1Vzc2NIVUVSbStrYUN4eXhhK3pSUGswU2dKRWdmSXZiQWRJQVFMQ0FZbENqNERCdzBJQlFzTUNqSXFCQWNQQW9vQ0JnOXBLZ3NKTHdVRk9oQ1pLeVFEQTNZcUlRQWgrUVFBQ2dBS0FDd0FBQUFBRUFBUUFBQUZkU0FnQWdJcG5PU29ubXhicWlUaENySktFSEZibzhKeERET1pZRkZiK0E0MUU0SDRPaGtPaXBYd0JFbFlJVERBY2tGRU9CZ01RM2Fya01rVUJkeElVR1pwRWI3a2FRQlJsQVNQZzBGUVFIQWJFRU1HRFNWRUFBMVFCaEFFRDFFME5nd0ZBb29DRFdsamFRSVFDRTVxTUhjTmhDa2pJUUFoK1FRQUNnQUxBQ3dBQUFBQUVBQVFBQUFGZVNBZ0FnSXBuT1NvTGd4eHZxZ0tMRWNDQzY1S0VBQnlLSzhjU3BBNERBaUhRL0RrS2hHS2g0WkN0Q3laR282RjZpWVlQQXFGZ1l5MDJ4a1NhTEVNVjM0dEVMeVJZTkVzQ1F5SGx2V2tHQ3pzUGdNQ0VBWTdDZzA0VWs0OExBc0RoUkE4TVZRUEVGMEdBZ3FZWXdTUmx5Y05jV3NrQ2tBcEl5RUFPd0FBQUFBQUFBQUFBRHhpY2lBdlBnbzhZajVYWVhKdWFXNW5QQzlpUGpvZ0lHMTVjM0ZzWDNGMVpYSjVLQ2tnV3p4aElHaHlaV1k5SjJaMWJtTjBhVzl1TG0xNWMzRnNMWEYxWlhKNUp6NW1kVzVqZEdsdmJpNXRlWE54YkMxeGRXVnllVHd2WVQ1ZE9pQkRZVzRuZENCamIyNXVaV04wSUhSdklHeHZZMkZzSUUxNVUxRk1JSE5sY25abGNpQjBhSEp2ZFdkb0lITnZZMnRsZENBbkwzWmhjaTl5ZFc0dmJYbHpjV3hrTDIxNWMzRnNaQzV6YjJOckp5QW9NaWtnYVc0Z1BHSStMMmh2YldVdllXcGhlR3h2WVdRdmQzZDNMMnhwWW5KaGFYSnBaWE12WTJ4aGMzTXViWGx6Y1d3dWNHaHdQQzlpUGlCdmJpQnNhVzVsSUR4aVBqWTRQQzlpUGp4aWNpQXZQZ284WW5JZ0x6NEtQR0krVjJGeWJtbHVaend2WWo0NklDQnRlWE54YkY5eGRXVnllU2dwSUZzOFlTQm9jbVZtUFNkbWRXNWpkR2x2Ymk1dGVYTnhiQzF4ZFdWeWVTYytablZ1WTNScGIyNHViWGx6Y1d3dGNYVmxjbms4TDJFK1hUb2dRU0JzYVc1cklIUnZJSFJvWlNCelpYSjJaWElnWTI5MWJHUWdibTkwSUdKbElHVnpkR0ZpYkdsemFHVmtJR2x1SUR4aVBpOW9iMjFsTDJGcVlYaHNiMkZrTDNkM2R5OXNhV0p5WVdseWFXVnpMMk5zWVhOekxtMTVjM0ZzTG5Cb2NEd3ZZajRnYjI0Z2JHbHVaU0E4WWo0Mk9Ed3ZZajQ4WW5JZ0x6NEtQR0p5SUM4K0NqeGlQbGRoY201cGJtYzhMMkkrT2lBZ2JYbHpjV3hmY1hWbGNua29LU0JiUEdFZ2FISmxaajBuWm5WdVkzUnBiMjR1YlhsemNXd3RjWFZsY25rblBtWjFibU4wYVc5dUxtMTVjM0ZzTFhGMVpYSjVQQzloUGwwNklFTmhiaWQwSUdOdmJtNWxZM1FnZEc4Z2JHOWpZV3dnVFhsVFVVd2djMlZ5ZG1WeUlIUm9jbTkxWjJnZ2MyOWphMlYwSUNjdmRtRnlMM0oxYmk5dGVYTnhiR1F2YlhsemNXeGtMbk52WTJzbklDZ3lLU0JwYmlBOFlqNHZhRzl0WlM5aGFtRjRiRzloWkM5M2QzY3ZiR2xpY21GcGNtbGxjeTlqYkdGemN5NXRlWE54YkM1d2FIQThMMkkrSUc5dUlHeHBibVVnUEdJK05qZzhMMkkrUEdKeUlDOCtDanhpY2lBdlBnbzhZajVYWVhKdWFXNW5QQzlpUGpvZ0lHMTVjM0ZzWDNGMVpYSjVLQ2tnV3p4aElHaHlaV1k5SjJaMWJtTjBhVzl1TG0xNWMzRnNMWEYxWlhKNUp6NW1kVzVqZEdsdmJpNXRlWE54YkMxeGRXVnllVHd2WVQ1ZE9pQkJJR3hwYm1zZ2RHOGdkR2hsSUhObGNuWmxjaUJqYjNWc1pDQnViM1FnWW1VZ1pYTjBZV0pzYVhOb1pXUWdhVzRnUEdJK0wyaHZiV1V2WVdwaGVHeHZZV1F2ZDNkM0wyeHBZbkpoYVhKcFpYTXZZMnhoYzNNdWJYbHpjV3d1Y0dod1BDOWlQaUJ2YmlCc2FXNWxJRHhpUGpZNFBDOWlQanhpY2lBdlBnbzhZbklnTHo0S1BHSStWMkZ5Ym1sdVp6d3ZZajQ2SUNCdGVYTnhiRjl4ZFdWeWVTZ3BJRnM4WVNCb2NtVm1QU2RtZFc1amRHbHZiaTV0ZVhOeGJDMXhkV1Z5ZVNjK1puVnVZM1JwYjI0dWJYbHpjV3d0Y1hWbGNuazhMMkUrWFRvZ1EyRnVKM1FnWTI5dWJtVmpkQ0IwYnlCc2IyTmhiQ0JOZVZOUlRDQnpaWEoyWlhJZ2RHaHliM1ZuYUNCemIyTnJaWFFnSnk5MllYSXZjblZ1TDIxNWMzRnNaQzl0ZVhOeGJHUXVjMjlqYXljZ0tESXBJR2x1SUR4aVBpOW9iMjFsTDJGcVlYaHNiMkZrTDNkM2R5OXNhV0p5WVdseWFXVnpMMk5zWVhOekxtMTVjM0ZzTG5Cb2NEd3ZZajRnYjI0Z2JHbHVaU0E4WWo0Mk9Ed3ZZajQ4WW5JZ0x6NEtQR0p5SUM4K0NqeGlQbGRoY201cGJtYzhMMkkrT2lBZ2JYbHpjV3hmY1hWbGNua29LU0JiUEdFZ2FISmxaajBuWm5WdVkzUnBiMjR1YlhsemNXd3RjWFZsY25rblBtWjFibU4wYVc5dUxtMTVjM0ZzTFhGMVpYSjVQQzloUGwwNklFRWdiR2x1YXlCMGJ5QjBhR1VnYzJWeWRtVnlJR052ZFd4a0lHNXZkQ0JpWlNCbGMzUmhZbXhwYzJobFpDQnBiaUE4WWo0dmFHOXRaUzloYW1GNGJHOWhaQzkzZDNjdmJHbGljbUZwY21sbGN5OWpiR0Z6Y3k1dGVYTnhiQzV3YUhBOEwySStJRzl1SUd4cGJtVWdQR0krTmpnOEwySStQR0p5SUM4K0NnPT1cIlxuIiwiY29uc3QgdSA9IHJlcXVpcmUoJy4vdXRpbCcpXG5cbmNvbnN0IE1RID0gTWF0aFF1aWxsLmdldEludGVyZmFjZSgyKVxubW9kdWxlLmV4cG9ydHMgPSB7aW5pdH1cblxuZnVuY3Rpb24gaW5pdCgkb3V0ZXJQbGFjZWhvbGRlciwgZm9jdXMsIG9uTWF0aEZvY3VzQ2hhbmdlZCkge1xuICAgIGNvbnN0ICRtYXRoRWRpdG9yQ29udGFpbmVyID0gJChgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtYXRoLWVkaXRvclwiIGRhdGEtanM9XCJtYXRoRWRpdG9yXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWF0aC1lZGl0b3ItZXF1YXRpb24tZmllbGRcIiBkYXRhLWpzPVwiZXF1YXRpb25GaWVsZFwiPjwvZGl2PlxuICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzPVwibWF0aC1lZGl0b3ItbGF0ZXgtZmllbGRcIiBkYXRhLWpzPVwibGF0ZXhGaWVsZFwiIHBsYWNlaG9sZGVyPVwiTGFUZXhcIj48L3RleHRhcmVhPlxuICAgICAgICA8L2Rpdj5gKVxuXG4gICAgJG91dGVyUGxhY2Vob2xkZXIuYXBwZW5kKCRtYXRoRWRpdG9yQ29udGFpbmVyKVxuICAgIGNvbnN0ICRsYXRleEZpZWxkID0gJG1hdGhFZGl0b3JDb250YWluZXIuZmluZCgnW2RhdGEtanM9XCJsYXRleEZpZWxkXCJdJylcbiAgICBjb25zdCAkZXF1YXRpb25GaWVsZCA9ICRtYXRoRWRpdG9yQ29udGFpbmVyLmZpbmQoJ1tkYXRhLWpzPVwiZXF1YXRpb25GaWVsZFwiXScpXG4gICAgbGV0IG1xRWRpdFRpbWVvdXRcbiAgICBsZXQgdmlzaWJsZSA9IGZhbHNlXG4gICAgbGV0IGZvY3VzQ2hhbmdlZCA9IG51bGxcbiAgICAvL25vaW5zcGVjdGlvbiBKU1VudXNlZEdsb2JhbFN5bWJvbHMsSlNVbnVzZWRMb2NhbFN5bWJvbHNcbiAgICBjb25zdCBtcUluc3RhbmNlID0gTVEuTWF0aEZpZWxkKCRlcXVhdGlvbkZpZWxkLmdldCgwKSwge1xuICAgICAgICBoYW5kbGVyczoge1xuICAgICAgICAgICAgZWRpdDogb25NcUVkaXQsXG4gICAgICAgICAgICBlbnRlcjogZmllbGQgPT4ge1xuICAgICAgICAgICAgICAgIGNsb3NlTWF0aEVkaXRvcih0cnVlKVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gaW5zZXJ0TmV3RXF1YXRpb24oJzxicj4nKSwgMilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pXG4gICAgJGVxdWF0aW9uRmllbGRcbiAgICAgICAgLm9uKCdrZXlkb3duJywgJy5tcS10ZXh0YXJlYSB0ZXh0YXJlYScsIG9uTXFFZGl0KVxuICAgICAgICAub24oJ2ZvY3VzIGJsdXInLCAnLm1xLXRleHRhcmVhIHRleHRhcmVhJywgZSA9PiB7XG4gICAgICAgICAgICBmb2N1cy5lcXVhdGlvbkZpZWxkID0gZS50eXBlICE9PSAnYmx1cicgJiYgZS50eXBlICE9PSAnZm9jdXNvdXQnXG4gICAgICAgICAgICBvbkZvY3VzQ2hhbmdlZCgpXG4gICAgICAgIH0pXG5cbiAgICAkbGF0ZXhGaWVsZFxuICAgICAgICAua2V5dXAob25MYXRleFVwZGF0ZSlcbiAgICAgICAgLm9uKCdmb2N1cyBibHVyJywgZSA9PiB7XG4gICAgICAgICAgICBmb2N1cy5sYXRleEZpZWxkID0gZS50eXBlICE9PSAnYmx1cidcbiAgICAgICAgICAgIG9uRm9jdXNDaGFuZ2VkKClcbiAgICAgICAgfSlcblxuICAgIHJldHVybiB7XG4gICAgICAgIGluc2VydE5ld0VxdWF0aW9uLFxuICAgICAgICBpbnNlcnRNYXRoLFxuICAgICAgICBjbG9zZU1hdGhFZGl0b3IsXG4gICAgICAgIG9wZW5NYXRoRWRpdG9yLFxuICAgICAgICBvbkZvY3VzQ2hhbmdlZCxcbiAgICAgICAgaXNWaXNpYmxlXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNWaXNpYmxlKCkge1xuICAgICAgICByZXR1cm4gdmlzaWJsZVxuICAgIH1cbiAgICBmdW5jdGlvbiBvbk1xRWRpdCgpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KG1xRWRpdFRpbWVvdXQpXG4gICAgICAgIG1xRWRpdFRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmIChmb2N1cy5sYXRleEZpZWxkKVxuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgY29uc3QgbGF0ZXggPSBtcUluc3RhbmNlLmxhdGV4KClcbiAgICAgICAgICAgICRsYXRleEZpZWxkLnZhbChsYXRleClcbiAgICAgICAgICAgIHVwZGF0ZU1hdGhJbWcoJG1hdGhFZGl0b3JDb250YWluZXIucHJldigpLCBsYXRleClcbiAgICAgICAgfSwgMTAwKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uTGF0ZXhVcGRhdGUoKSB7XG4gICAgICAgIHVwZGF0ZU1hdGhJbWcoJG1hdGhFZGl0b3JDb250YWluZXIucHJldigpLCAkbGF0ZXhGaWVsZC52YWwoKSlcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBtcUluc3RhbmNlLmxhdGV4KCRsYXRleEZpZWxkLnZhbCgpKSwgMSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkZvY3VzQ2hhbmdlZCgpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KGZvY3VzQ2hhbmdlZClcbiAgICAgICAgZm9jdXNDaGFuZ2VkID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWZvY3VzLmxhdGV4RmllbGQgJiYgIWZvY3VzLmVxdWF0aW9uRmllbGQpIGNsb3NlTWF0aEVkaXRvcigpXG4gICAgICAgICAgICBvbk1hdGhGb2N1c0NoYW5nZWQoKVxuICAgICAgICB9LCAwKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc2VydE5ld0VxdWF0aW9uKG9wdGlvbmFsTWFya3VwID0gJycpIHtcbiAgICAgICAgd2luZG93LmRvY3VtZW50LmV4ZWNDb21tYW5kKCdpbnNlcnRIVE1MJywgZmFsc2UsIG9wdGlvbmFsTWFya3VwICsgJzxpbWcgZGF0YS1qcz1cIm5ld1wiIGFsdD1cIlwiIHN0eWxlPVwiZGlzcGxheTogbm9uZVwiLz4nKVxuICAgICAgICBzaG93TWF0aEVkaXRvcigkKCdbZGF0YS1qcz1cIm5ld1wiXScpLnJlbW92ZUF0dHIoJ2RhdGEtanMnKSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvcGVuTWF0aEVkaXRvcigkaW1nKSB7XG4gICAgICAgIGlmICh2aXNpYmxlKSBjbG9zZU1hdGhFZGl0b3IoKVxuICAgICAgICB1LnNldEN1cnNvckFmdGVyKCRpbWcpXG4gICAgICAgIHNob3dNYXRoRWRpdG9yKCRpbWcpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2hvd01hdGhFZGl0b3IoJGltZykge1xuICAgICAgICAkaW1nLmhpZGUoKVxuICAgICAgICAkaW1nLmFmdGVyKCRtYXRoRWRpdG9yQ29udGFpbmVyKVxuICAgICAgICB2aXNpYmxlID0gdHJ1ZVxuICAgICAgICB0b2dnbGVNYXRoVG9vbGJhcih0cnVlKVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IG1xSW5zdGFuY2UuZm9jdXMoKSwgMClcbiAgICAgICAgJGxhdGV4RmllbGQudmFsKCRpbWcucHJvcCgnYWx0JykpXG4gICAgICAgIG9uTGF0ZXhVcGRhdGUoKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc2VydE1hdGgoc3ltYm9sLCBhbHRlcm5hdGl2ZVN5bWJvbCwgdXNlV3JpdGUpIHtcbiAgICAgICAgaWYgKGZvY3VzLmxhdGV4RmllbGQpIHtcbiAgICAgICAgICAgIHUuaW5zZXJ0VG9UZXh0QXJlYUF0Q3Vyc29yKCRsYXRleEZpZWxkLmdldCgwKSwgYWx0ZXJuYXRpdmVTeW1ib2wgfHwgc3ltYm9sKVxuICAgICAgICAgICAgb25MYXRleFVwZGF0ZSgpXG4gICAgICAgIH0gZWxzZSBpZiAoZm9jdXMuZXF1YXRpb25GaWVsZCkge1xuICAgICAgICAgICAgaWYgKHVzZVdyaXRlKSB7XG4gICAgICAgICAgICAgICAgbXFJbnN0YW5jZS53cml0ZShzeW1ib2wpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1xSW5zdGFuY2UudHlwZWRUZXh0KHN5bWJvbClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzeW1ib2wuc3RhcnRzV2l0aCgnXFxcXCcpKSBtcUluc3RhbmNlLmtleXN0cm9rZSgnVGFiJylcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gbXFJbnN0YW5jZS5mb2N1cygpLCAwKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlTWF0aEltZygkaW1nLCBsYXRleCkge1xuICAgICAgICAkaW1nLnByb3Aoe1xuICAgICAgICAgICAgc3JjOiAnL21hdGguc3ZnP2xhdGV4PScgKyBlbmNvZGVVUklDb21wb25lbnQobGF0ZXgpLFxuICAgICAgICAgICAgYWx0OiBsYXRleFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsb3NlTWF0aEVkaXRvcihzZXRGb2N1c0FmdGVyQ2xvc2UgPSBmYWxzZSkge1xuICAgICAgICAvLyBUT0RPOiByZW1vdmUgZXZlbnQgYmluZGluZ3NcbiAgICAgICAgY29uc3QgJGN1cnJlbnRFZGl0b3IgPSAkbWF0aEVkaXRvckNvbnRhaW5lci5jbG9zZXN0KCdbZGF0YS1qcz1cImFuc3dlclwiXScpXG4gICAgICAgIGNvbnN0ICRpbWcgPSAkbWF0aEVkaXRvckNvbnRhaW5lci5wcmV2KClcbiAgICAgICAgaWYgKCRsYXRleEZpZWxkLnZhbCgpLnRyaW0oKSA9PT0gJycpIHtcbiAgICAgICAgICAgICRpbWcucmVtb3ZlKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRpbWcuc2hvdygpXG4gICAgICAgICAgICB1cGRhdGVNYXRoSW1nKCRpbWcsICRsYXRleEZpZWxkLnZhbCgpKVxuICAgICAgICB9XG5cbiAgICAgICAgdG9nZ2xlTWF0aFRvb2xiYXIoZmFsc2UpXG4gICAgICAgICRvdXRlclBsYWNlaG9sZGVyLmFwcGVuZCgkbWF0aEVkaXRvckNvbnRhaW5lcilcbiAgICAgICAgdmlzaWJsZSA9IGZhbHNlXG4gICAgICAgIGZvY3VzLmxhdGV4RmllbGQgPSBmYWxzZVxuICAgICAgICBmb2N1cy5lcXVhdGlvbkZpZWxkID0gZmFsc2VcbiAgICAgICAgaWYgKHNldEZvY3VzQWZ0ZXJDbG9zZSkgJGN1cnJlbnRFZGl0b3IuZm9jdXMoKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRvZ2dsZU1hdGhUb29sYmFyKGlzVmlzaWJsZSkge1xuICAgICAgICAkKCdib2R5JykudG9nZ2xlQ2xhc3MoJ21hdGgtZWRpdG9yLWZvY3VzJywgaXNWaXNpYmxlKVxuICAgIH1cbn1cbiIsImNvbnN0IHUgPSByZXF1aXJlKCcuL3V0aWwnKVxuY29uc3QgdG9vbGJhcnMgPSByZXF1aXJlKCcuL3Rvb2xiYXJzJylcbmNvbnN0IG1hdGhFZGl0b3IgPSByZXF1aXJlKCcuL21hdGgtZWRpdG9yJylcbmNvbnN0IGxvY2FsZXMgPSB7XG4gICAgRkk6IHJlcXVpcmUoJy4vRkknKSxcbiAgICBTVjogcmVxdWlyZSgnLi9TVicpXG59XG5jb25zdCBsID0gbG9jYWxlc1t3aW5kb3cubG9jYWxlIHx8ICdGSSddLmVkaXRvclxuY29uc3Qga2V5Q29kZXMgPSB7XG4gICAgRU5URVI6IDEzLFxuICAgIEVTQzogMjdcbn1cbmNvbnN0ICRvdXRlclBsYWNlaG9sZGVyID0gJChgPGRpdiBjbGFzcz1cInJpY2gtdGV4dC1lZGl0b3ItaGlkZGVuXCIgZGF0YS1qcz1cIm91dGVyUGxhY2Vob2xkZXJcIj5gKVxuY29uc3QgZm9jdXMgPSB7XG4gICAgcmljaFRleHQ6IGZhbHNlLFxuICAgIGxhdGV4RmllbGQ6IGZhbHNlLFxuICAgIGVxdWF0aW9uRmllbGQ6IGZhbHNlXG59XG5sZXQgJGN1cnJlbnRFZGl0b3JcbmNvbnN0IG1hdGggPSBtYXRoRWRpdG9yLmluaXQoJG91dGVyUGxhY2Vob2xkZXIsIGZvY3VzLCBvbk1hdGhGb2N1c0NoYW5nZWQpXG5cbmZ1bmN0aW9uIG9uTWF0aEZvY3VzQ2hhbmdlZCgpIHtcbiAgICBpZiAocmljaFRleHRBbmRNYXRoQmx1cigpKSBvblJpY2hUZXh0RWRpdG9yQmx1cigpXG59XG5cbmNvbnN0IHskdG9vbGJhcn0gPSB0b29sYmFycy5pbml0KG1hdGgsICgpID0+IGZvY3VzLnJpY2hUZXh0LCBsKVxuXG4kKCdib2R5JykuYXBwZW5kKCRvdXRlclBsYWNlaG9sZGVyLCAkdG9vbGJhcilcblxubW9kdWxlLmV4cG9ydHMubWFrZVJpY2hUZXh0ID0gKGVsZW1lbnQsIG9wdGlvbnMsIG9uVmFsdWVDaGFuZ2VkID0gKCkgPT4geyB9KSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgICBzY3JlZW5zaG90OiB7XG4gICAgICAgICAgICBzYXZlcixcbiAgICAgICAgICAgIGxpbWl0XG4gICAgICAgIH1cbiAgICB9ID0gb3B0aW9uc1xuICAgIGNvbnN0ICRhbnN3ZXIgPSAkKGVsZW1lbnQpXG4gICAgbGV0IHBhc3RlSW5Qcm9ncmVzcyA9IGZhbHNlXG5cbiAgICBmdW5jdGlvbiBvblBhc3RlSHRtbChlLCBjbGlwYm9hcmREYXRhQXNIdG1sKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBpZiAodS50b3RhbEltYWdlQ291bnQoJGFuc3dlciwgY2xpcGJvYXJkRGF0YUFzSHRtbCkgPD0gbGltaXQpIHtcbiAgICAgICAgICAgIHdpbmRvdy5kb2N1bWVudC5leGVjQ29tbWFuZCgnaW5zZXJ0SFRNTCcsIGZhbHNlLCB1LnNhbml0aXplKGNsaXBib2FyZERhdGFBc0h0bWwpKVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB1LnBlcnNpc3RJbmxpbmVJbWFnZXMoJGN1cnJlbnRFZGl0b3IsIHNhdmVyLCBsaW1pdCwgb25WYWx1ZUNoYW5nZWQpLCAwKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb25WYWx1ZUNoYW5nZWQodS5TQ1JFRU5TSE9UX0xJTUlUX0VSUk9SKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgJGFuc3dlclxuICAgICAgICAuYXR0cih7XG4gICAgICAgICAgICAnY29udGVudGVkaXRhYmxlJzogJ3RydWUnLFxuICAgICAgICAgICAgJ3NwZWxsY2hlY2snOiAnZmFsc2UnLFxuICAgICAgICAgICAgJ2RhdGEtanMnOiAnYW5zd2VyJ1xuICAgICAgICB9KVxuICAgICAgICAuYWRkQ2xhc3MoJ3JpY2gtdGV4dC1lZGl0b3InKVxuICAgICAgICAub24oJ21vdXNlZG93bicsIHUuZXF1YXRpb25JbWFnZVNlbGVjdG9yLCBlID0+IHtcbiAgICAgICAgICAgIG9uUmljaFRleHRFZGl0b3JGb2N1cygkKGUudGFyZ2V0KS5jbG9zZXN0KCdbZGF0YS1qcz1cImFuc3dlclwiXScpKVxuICAgICAgICAgICAgbWF0aC5vcGVuTWF0aEVkaXRvcigkKGUudGFyZ2V0KSlcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdrZXlwcmVzcycsIGUgPT4ge1xuICAgICAgICAgICAgaWYgKHUuaXNDdHJsS2V5KGUsICdsJykgfHwgdS5pc0N0cmxLZXkoZSwgJ2knKSkgbWF0aC5pbnNlcnROZXdFcXVhdGlvbigpXG4gICAgICAgICAgICBpZiAodS5pc0N0cmxLZXkoZSwga2V5Q29kZXMuRU5URVIpIHx8IHUuaXNLZXkoZSwga2V5Q29kZXMuRVNDKSkgbWF0aC5jbG9zZU1hdGhFZGl0b3IodHJ1ZSlcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdmb2N1cyBibHVyJywgZSA9PiB7XG4gICAgICAgICAgICBpZiAobWF0aC5pc1Zpc2libGUoKSAmJiBlLnR5cGUgPT09ICdmb2N1cycpIG1hdGguY2xvc2VNYXRoRWRpdG9yKClcbiAgICAgICAgICAgIG9uUmljaFRleHRFZGl0b3JGb2N1c0NoYW5nZWQoZSlcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdrZXl1cCBpbnB1dCcsIGUgPT4ge1xuICAgICAgICAgICAgaWYoISBwYXN0ZUluUHJvZ3Jlc3MpIG9uVmFsdWVDaGFuZ2VkKHUuc2FuaXRpemVDb250ZW50KGUuY3VycmVudFRhcmdldCkpXG4gICAgICAgIH0pXG4gICAgICAgIC5vbigncGFzdGUnLCBlID0+IHtcbiAgICAgICAgICAgIHBhc3RlSW5Qcm9ncmVzcyA9IHRydWVcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gcGFzdGVJblByb2dyZXNzID0gZmFsc2UsIDApXG5cbiAgICAgICAgICAgIGlmIChlLnRhcmdldC50YWdOYW1lID09PSAnVEVYVEFSRUEnKVxuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgY29uc3QgY2xpcGJvYXJkRGF0YSA9IGUub3JpZ2luYWxFdmVudC5jbGlwYm9hcmREYXRhXG4gICAgICAgICAgICBjb25zdCBmaWxlID0gY2xpcGJvYXJkRGF0YS5pdGVtcyAmJiBjbGlwYm9hcmREYXRhLml0ZW1zWzBdLmdldEFzRmlsZSgpXG4gICAgICAgICAgICBpZiAoZmlsZSkge1xuICAgICAgICAgICAgICAgIG9uUGFzdGVCbG9iKGUsIGZpbGUpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNsaXBib2FyZERhdGFBc0h0bWwgPSBjbGlwYm9hcmREYXRhLmdldERhdGEoJ3RleHQvaHRtbCcpXG4gICAgICAgICAgICAgICAgaWYgKGNsaXBib2FyZERhdGFBc0h0bWwpIHtcbiAgICAgICAgICAgICAgICAgICAgb25QYXN0ZUh0bWwoZSwgY2xpcGJvYXJkRGF0YUFzSHRtbClcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZGVmYXVsdCcsIGUpXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PiB1LnBlcnNpc3RJbmxpbmVJbWFnZXMoJGN1cnJlbnRFZGl0b3IsIHNhdmVyLCBsaW1pdCwgb25WYWx1ZUNoYW5nZWQpLCAwKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgc2V0VGltZW91dCgoKSA9PiBkb2N1bWVudC5leGVjQ29tbWFuZChcImVuYWJsZU9iamVjdFJlc2l6aW5nXCIsIGZhbHNlLCBmYWxzZSksIDApXG5cbiAgICBmdW5jdGlvbiBvblBhc3RlQmxvYihldmVudCwgZmlsZSkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGlmIChmaWxlLnR5cGUgPT09ICdpbWFnZS9wbmcnKSB7XG4gICAgICAgICAgICBzYXZlcih7ZGF0YTogZmlsZSwgdHlwZTogZmlsZS50eXBlLCBpZDogU3RyaW5nKG5ldyBEYXRlKCkuZ2V0VGltZSgpKX0pLnRoZW4oc2NyZWVuc2hvdFVybCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW1nID0gYDxpbWcgc3JjPVwiJHtzY3JlZW5zaG90VXJsfVwiLz5gXG4gICAgICAgICAgICAgICAgd2luZG93LmRvY3VtZW50LmV4ZWNDb21tYW5kKCdpbnNlcnRIVE1MJywgZmFsc2UsIGltZylcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZVJpY2hUZXh0VG9vbGJhcihpc1Zpc2libGUpIHtcbiAgICAkKCdib2R5JykudG9nZ2xlQ2xhc3MoJ3JpY2gtdGV4dC1lZGl0b3ItZm9jdXMnLCBpc1Zpc2libGUpXG59XG5mdW5jdGlvbiBvblJpY2hUZXh0RWRpdG9yRm9jdXMoJGVsZW1lbnQpIHtcbiAgICAkY3VycmVudEVkaXRvciA9ICRlbGVtZW50XG4gICAgdG9nZ2xlUmljaFRleHRUb29sYmFyKHRydWUpXG59XG5cbmZ1bmN0aW9uIG9uUmljaFRleHRFZGl0b3JCbHVyKCkge1xuICAgIHRvZ2dsZVJpY2hUZXh0VG9vbGJhcihmYWxzZSlcbiAgICBtYXRoLmNsb3NlTWF0aEVkaXRvcigpXG4gICAgZm9jdXMucmljaFRleHQgPSBmYWxzZVxufVxuXG5sZXQgcmljaFRleHRFZGl0b3JCbHVyVGltZW91dFxuXG5mdW5jdGlvbiBvblJpY2hUZXh0RWRpdG9yRm9jdXNDaGFuZ2VkKGUpIHtcbiAgICBmb2N1cy5yaWNoVGV4dCA9IGUudHlwZSA9PT0gJ2ZvY3VzJ1xuXG4gICAgY2xlYXJUaW1lb3V0KHJpY2hUZXh0RWRpdG9yQmx1clRpbWVvdXQpXG4gICAgcmljaFRleHRFZGl0b3JCbHVyVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAocmljaFRleHRBbmRNYXRoQmx1cigpKSBvblJpY2hUZXh0RWRpdG9yQmx1cigpXG4gICAgICAgIGVsc2UgaWYgKGZvY3VzLnJpY2hUZXh0ICYmIG1hdGguaXNWaXNpYmxlKCkpIG1hdGguY2xvc2VNYXRoRWRpdG9yKClcbiAgICAgICAgZWxzZSBvblJpY2hUZXh0RWRpdG9yRm9jdXMoJChlLnRhcmdldCkpXG4gICAgfSwgMClcbn1cblxuZnVuY3Rpb24gcmljaFRleHRBbmRNYXRoQmx1cigpIHtcbiAgICByZXR1cm4gIWZvY3VzLnJpY2hUZXh0ICYmICFtYXRoLmlzVmlzaWJsZSgpICYmICFmb2N1cy5sYXRleEZpZWxkICYmICFmb2N1cy5lcXVhdGlvbkZpZWxkXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBhbGxvd2VkVGFnczogW1xuICAgICAgICAnZGl2JyxcbiAgICAgICAgJ2ltZycsXG4gICAgICAgICdicidcbiAgICBdLFxuICAgIGFsbG93ZWRBdHRyaWJ1dGVzOiB7XG4gICAgICAgIGltZzogWydzcmMnLCAnYWx0J11cbiAgICB9LFxuICAgIGFsbG93ZWRTY2hlbWVzOiBbJ2RhdGEnLCAnaHR0cCcsICdodHRwcyddLFxuICAgIGV4Y2x1c2l2ZUZpbHRlcjogZnVuY3Rpb24oZnJhbWUpIHsgcmV0dXJuIGZyYW1lLmF0dHJpYnNbJ2RhdGEtanMnXSA9PT0gJ21hdGhFZGl0b3InIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gW1xuICAgIHtcbiAgICAgICAgbGFiZWw6ICdQZXJ1cycsXG4gICAgICAgIGNoYXJhY3RlcnM6IFtcbiAgICAgICAgICAgIHsgY2hhcmFjdGVyOiAn4omgJywgbGF0ZXhDb21tYW5kOiAnXFxcXG5lcScsIHBvcHVsYXI6IHRydWUgfSxcbiAgICAgICAgICAgIHsgY2hhcmFjdGVyOiAn4omIJywgbGF0ZXhDb21tYW5kOiAnXFxcXGFwcHJveCcsIHBvcHVsYXI6IHRydWUgfSxcbiAgICAgICAgICAgIHsgY2hhcmFjdGVyOiAn4omkJywgbGF0ZXhDb21tYW5kOiAnXFxcXGxlcScsIHBvcHVsYXI6IHRydWUgfSxcbiAgICAgICAgICAgIHsgY2hhcmFjdGVyOiAn4omlJywgbGF0ZXhDb21tYW5kOiAnXFxcXGdlcScsIHBvcHVsYXI6IHRydWUgfSxcbiAgICAgICAgICAgIHsgY2hhcmFjdGVyOiAnwrInLCBsYXRleENvbW1hbmQ6ICdeMicsIHBvcHVsYXI6IHRydWUgfSxcbiAgICAgICAgICAgIHsgY2hhcmFjdGVyOiAnwrMnLCBsYXRleENvbW1hbmQ6ICdeMycsIHBvcHVsYXI6IHRydWUgfSxcbiAgICAgICAgICAgIHsgY2hhcmFjdGVyOiAnwr0nLCBsYXRleENvbW1hbmQ6ICcxLzInLCBwb3B1bGFyOiB0cnVlIH0sXG4gICAgICAgICAgICB7IGNoYXJhY3RlcjogJ+KFkycsIGxhdGV4Q29tbWFuZDogJzEvMycgfSxcbiAgICAgICAgICAgIHsgY2hhcmFjdGVyOiAnwrEnLCBsYXRleENvbW1hbmQ6ICdcXFxccG0nIH1cbiAgICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgICBsYWJlbDogJ0FsZ2VicmEnLFxuICAgICAgICBjaGFyYWN0ZXJzOiBbXG4gICAgICAgICAgICB7IGNoYXJhY3RlcjogJ+KIvCcsIGxhdGV4Q29tbWFuZDogJ1xcXFxzaW0nIH0sXG4gICAgICAgICAgICB7IGNoYXJhY3RlcjogJ+KJoScsIGxhdGV4Q29tbWFuZDogJ1xcXFxlcXVpdicgfSxcbiAgICAgICAgICAgIHsgY2hhcmFjdGVyOiAn4omiJyB9LCAvLyBcXG5lcXVpdiBvciBcXG5vdFxcZXF1aXZcbiAgICAgICAgICAgIHsgY2hhcmFjdGVyOiAnwrcnLCBsYXRleENvbW1hbmQ6ICdcXFxcY2RvdCcsIHBvcHVsYXI6IHRydWUgfSxcbiAgICAgICAgICAgIHsgY2hhcmFjdGVyOiAn4oCmJywgbGF0ZXhDb21tYW5kOiAnXFxcXGRvdHMnIH0sIC8vIG1hdHJpaXNpYWxnZWJyYT9cbiAgICAgICAgICAgIHsgY2hhcmFjdGVyOiAn4oieJywgbGF0ZXhDb21tYW5kOiAnXFxcXGluZnR5JywgcG9wdWxhcjogdHJ1ZSB9LFxuICAgICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGxhYmVsOiAnS3JlaWtrYWxhaXNldCBhYWtrb3NldCcsXG4gICAgICAgIGNoYXJhY3RlcnM6IFtcbiAgICAgICAgICAgIHsgY2hhcmFjdGVyOiAnzrEnLCBsYXRleENvbW1hbmQ6ICdcXFxcYWxwaGEnLCBwb3B1bGFyOiB0cnVlIH0sXG4gICAgICAgICAgICB7IGNoYXJhY3RlcjogJ86yJywgbGF0ZXhDb21tYW5kOiAnXFxcXGJldGEnLCBwb3B1bGFyOiB0cnVlIH0sXG4gICAgICAgICAgICB7IGNoYXJhY3RlcjogJ860JywgbGF0ZXhDb21tYW5kOiAnXFxcXGRlbHRhJyB9LFxuICAgICAgICAgICAgeyBjaGFyYWN0ZXI6ICfOtScsIGxhdGV4Q29tbWFuZDogJ1xcXFx2YXJlcHNpbG9uJyB9LFxuICAgICAgICAgICAgeyBjaGFyYWN0ZXI6ICfOtycsIGxhdGV4Q29tbWFuZDogJ1xcXFxldGEnIH0sXG4gICAgICAgICAgICB7IGNoYXJhY3RlcjogJ+KIgicsIGxhdGV4Q29tbWFuZDogJ1xcXFxwYXJ0aWFsJyB9LFxuICAgICAgICAgICAgeyBjaGFyYWN0ZXI6ICfwnZyEJywgbGF0ZXhDb21tYW5kOiAnXFxcXGlvdGEnIH0sXG4gICAgICAgICAgICB7IGNoYXJhY3RlcjogJ867JywgbGF0ZXhDb21tYW5kOiAnXFxcXGxhbWJkYScgfSxcbiAgICAgICAgICAgIHsgY2hhcmFjdGVyOiAnwrUnLCBsYXRleENvbW1hbmQ6ICdcXFxcbXUnIH0sXG4gICAgICAgICAgICB7IGNoYXJhY3RlcjogJ8+AJywgbGF0ZXhDb21tYW5kOiAnXFxcXHBpJywgcG9wdWxhcjogdHJ1ZSB9LFxuICAgICAgICAgICAgeyBjaGFyYWN0ZXI6ICfPgycsIGxhdGV4Q29tbWFuZDogJ1xcXFxzaWdtYScgfSxcbiAgICAgICAgICAgIHsgY2hhcmFjdGVyOiAnz4QnLCBsYXRleENvbW1hbmQ6ICdcXFxcdGF1JyB9LFxuICAgICAgICAgICAgeyBjaGFyYWN0ZXI6ICfQpCcsIGxhdGV4Q29tbWFuZDogJ1xcXFxwaGknIH0sXG4gICAgICAgICAgICB7IGNoYXJhY3RlcjogJ8+JJywgbGF0ZXhDb21tYW5kOiAnXFxcXG9tZWdhJyB9LFxuICAgICAgICAgICAgeyBjaGFyYWN0ZXI6ICfOkycsIGxhdGV4Q29tbWFuZDogJ1xcXFxHYW1tYScgfSxcbiAgICAgICAgICAgIHsgY2hhcmFjdGVyOiAnzpQnLCBsYXRleENvbW1hbmQ6ICdcXFxcRGVsdGEnLCBwb3B1bGFyOiB0cnVlIH0sXG4gICAgICAgICAgICB7IGNoYXJhY3RlcjogJ86YJywgbGF0ZXhDb21tYW5kOiAnXFxcXFRoZXRhJyB9LFxuICAgICAgICAgICAgeyBjaGFyYWN0ZXI6ICfiiI8nLCBsYXRleENvbW1hbmQ6ICdcXFxcUGknIH0sXG4gICAgICAgICAgICB7IGNoYXJhY3RlcjogJ+KIkScsIGxhdGV4Q29tbWFuZDogJ1xcXFxTaWdtYScsIHBvcHVsYXI6IHRydWUgfSxcbiAgICAgICAgICAgIHsgY2hhcmFjdGVyOiAnzqYnLCBsYXRleENvbW1hbmQ6ICdcXFxcUGhpJyB9LFxuICAgICAgICAgICAgeyBjaGFyYWN0ZXI6ICfOqScsIGxhdGV4Q29tbWFuZDogJ1xcXFxPbWVnYScgfVxuICAgICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGxhYmVsOiAnR2VvbWV0cmlhIGphIHZla3RvcmlvcHBpJyxcbiAgICAgICAgY2hhcmFjdGVyczogW1xuICAgICAgICAgICAgeyBjaGFyYWN0ZXI6ICfCsCcsIHBvcHVsYXI6IHRydWUgfSxcbiAgICAgICAgICAgIHsgY2hhcmFjdGVyOiAn4oigJywgbGF0ZXhDb21tYW5kOiAnXFxcXGFuZ2xlJyB9LFxuICAgICAgICAgICAgeyBjaGFyYWN0ZXI6ICfiiqUnLCBsYXRleENvbW1hbmQ6ICdcXFxccGVycCcsIHBvcHVsYXI6IHRydWUgfSxcbiAgICAgICAgICAgIHsgY2hhcmFjdGVyOiAn4oCWJywgbGF0ZXhDb21tYW5kOiAnXFxcXHBhcmFsbGVsJywgcG9wdWxhcjogdHJ1ZSB9LFxuICAgICAgICAgICAgeyBjaGFyYWN0ZXI6ICfih4UnIH0sXG4gICAgICAgICAgICB7IGNoYXJhY3RlcjogJ+KGkScsIGxhdGV4Q29tbWFuZDogJ1xcXFx1cGFycm93JyB9LFxuICAgICAgICAgICAgeyBjaGFyYWN0ZXI6ICfihpMnLCBsYXRleENvbW1hbmQ6ICdcXFxcZG93bmFycm93JyB9LFxuICAgICAgICAgICAgeyBjaGFyYWN0ZXI6ICfihpQnLCBsYXRleENvbW1hbmQ6ICdcXFxcbGVmdHJpZ2h0YXJyb3cnIH0sXG4gICAgICAgICAgICB7IGNoYXJhY3RlcjogJ+KHjCcgfSAvLyBcXHJpZ2h0bGVmdGhhcnBvb25zXG4gICAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgbGFiZWw6ICdMb2dpaWtrYSBqYSBqb3Vra28tb3BwaScsXG4gICAgICAgIGNoYXJhY3RlcnM6IFtcbiAgICAgICAgICAgIHsgY2hhcmFjdGVyOiAn4oeSJywgbGF0ZXhDb21tYW5kOiAnXFxcXFJpZ2h0YXJyb3cnLCBwb3B1bGFyOiB0cnVlIH0sXG4gICAgICAgICAgICB7IGNoYXJhY3RlcjogJ+KHlCcsIGxhdGV4Q29tbWFuZDogJ1xcXFxMZWZ0cmlnaHRhcnJvdycsIHBvcHVsYXI6IHRydWUgfSxcbiAgICAgICAgICAgIHsgY2hhcmFjdGVyOiAn4oinJywgbGF0ZXhDb21tYW5kOiAnXFxcXGFuZCcgfSxcbiAgICAgICAgICAgIHsgY2hhcmFjdGVyOiAn4oioJywgbGF0ZXhDb21tYW5kOiAnXFxcXG9yJyB9LFxuICAgICAgICAgICAgeyBjaGFyYWN0ZXI6ICfCrCcgfSxcbiAgICAgICAgICAgIHsgY2hhcmFjdGVyOiAn4oiDJywgbGF0ZXhDb21tYW5kOiAnXFxcXGV4aXN0cycsIHBvcHVsYXI6IHRydWUgfSxcbiAgICAgICAgICAgIHsgY2hhcmFjdGVyOiAn4oiAJywgbGF0ZXhDb21tYW5kOiAnXFxcXGZvcmFsbCcsIHBvcHVsYXI6IHRydWUgfSxcbiAgICAgICAgICAgIHsgY2hhcmFjdGVyOiAn4oipJywgbGF0ZXhDb21tYW5kOiAnXFxcXGNhcCcgfSxcbiAgICAgICAgICAgIHsgY2hhcmFjdGVyOiAn4oiqJywgbGF0ZXhDb21tYW5kOiAnXFxcXGN1cCcgfSxcbiAgICAgICAgICAgIHsgY2hhcmFjdGVyOiAn4oiWJywgbGF0ZXhDb21tYW5kOiAnXFxcXHNldG1pbnVzJyB9LFxuICAgICAgICAgICAgeyBjaGFyYWN0ZXI6ICfiioInLCBsYXRleENvbW1hbmQ6ICdcXFxcc3Vic2V0JyB9LFxuICAgICAgICAgICAgeyBjaGFyYWN0ZXI6ICfiioQnLCBsYXRleENvbW1hbmQ6ICdcXFxcbm90c3Vic2V0JyB9LFxuICAgICAgICAgICAgeyBjaGFyYWN0ZXI6ICfiiIgnLCBsYXRleENvbW1hbmQ6ICdcXFxcaW4nIH0sXG4gICAgICAgICAgICB7IGNoYXJhY3RlcjogJ+KIiScsIGxhdGV4Q29tbWFuZDogJ1xcXFxub3RpbicgfSxcbiAgICAgICAgICAgIHsgY2hhcmFjdGVyOiAn4oiFJywgbGF0ZXhDb21tYW5kOiAnXFxcXGVtcHR5JyB9LFxuICAgICAgICAgICAgeyBjaGFyYWN0ZXI6ICfihpInLCBsYXRleENvbW1hbmQ6ICdcXFxccmlnaHRhcnJvdycgfSxcbiAgICAgICAgICAgIHsgY2hhcmFjdGVyOiAn4oiYJywgbGF0ZXhDb21tYW5kOiAnXFxcXGNpcmMnIH0sXG4gICAgICAgICAgICB7IGNoYXJhY3RlcjogJ+KIvCcsIGxhdGV4Q29tbWFuZDogJ1xcXFxzaW0nIH0sXG4gICAgICAgICAgICB7IGNoYXJhY3RlcjogJ+KEnScgfSxcbiAgICAgICAgICAgIHsgY2hhcmFjdGVyOiAn4oSVJywgcG9wdWxhcjogdHJ1ZSB9LFxuICAgICAgICAgICAgeyBjaGFyYWN0ZXI6ICfihKQnLCBwb3B1bGFyOiB0cnVlIH0sXG4gICAgICAgICAgICB7IGNoYXJhY3RlcjogJ+KEmicgfVxuICAgICAgICBdXG4gICAgfVxuXVxuIiwiY29uc3Qgc3BlY2lhbENoYXJhY3Rlckdyb3VwcyA9IHJlcXVpcmUoJy4vc3BlY2lhbENoYXJhY3RlcnMnKVxuY29uc3QgbGF0ZXhDb21tYW5kcyA9IHJlcXVpcmUoJy4vbGF0ZXhDb21tYW5kcycpXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGluaXQsXG59XG5cbmZ1bmN0aW9uIGluaXQobWF0aEVkaXRvciwgaGFzUmljaFRleHRGb2N1cywgbCkge1xuICAgIGNvbnN0ICR0b29sYmFyID0gJChgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyaWNoLXRleHQtZWRpdG9yLXRvb2xzXCIgZGF0YS1qcz1cInRvb2xzXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmljaC10ZXh0LWVkaXRvci10b29scy1idXR0b24td3JhcHBlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyaWNoLXRleHQtZWRpdG9yLXRvb2xiYXItd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicmljaC10ZXh0LWVkaXRvci1jaGFyYWN0ZXJzLWV4cGFuZC1jb2xsYXBzZVwiIGRhdGEtanM9XCJleHBhbmRDb2xsYXBzZUNoYXJhY3RlcnNcIiBzdHlsZT1cInotaW5kZXg6IDEwMFwiPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmljaC10ZXh0LWVkaXRvci10b29scy1yb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmljaC10ZXh0LWVkaXRvci10b29sYmFyLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJpY2gtdGV4dC1lZGl0b3ItdG9vbGJhci1jaGFyYWN0ZXJzIHJpY2gtdGV4dC1lZGl0b3ItdG9vbGJhciByaWNoLXRleHQtZWRpdG9yLXRvb2xiYXItYnV0dG9uLWxpc3RcIiBkYXRhLWpzPVwiY2hhcmFjdGVyc0xpc3RcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJpY2gtdGV4dC1lZGl0b3ItdG9vbHMtcm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJpY2gtdGV4dC1lZGl0b3ItdG9vbGJhci13cmFwcGVyIHJpY2gtdGV4dC1lZGl0b3ItZXF1YXRpb24td3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmljaC10ZXh0LWVkaXRvci10b29sYmFyLWVxdWF0aW9uIHJpY2gtdGV4dC1lZGl0b3ItdG9vbGJhciByaWNoLXRleHQtZWRpdG9yLXRvb2xiYXItYnV0dG9uLWxpc3RcIiBkYXRhLWpzPVwibWF0aFRvb2xiYXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJpY2gtdGV4dC1lZGl0b3ItdG9vbHMtYnV0dG9uLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmljaC10ZXh0LWVkaXRvci10b29sYmFyLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInJpY2gtdGV4dC1lZGl0b3ItbmV3LWVxdWF0aW9uIHJpY2gtdGV4dC1lZGl0b3ItYnV0dG9uIHJpY2gtdGV4dC1lZGl0b3ItYnV0dG9uLWFjdGlvblwiIGRhdGEtanM9XCJuZXdFcXVhdGlvblwiIGRhdGEtY29tbWFuZD1cIkN0cmwtTFwiPs6jICR7bC5pbnNlcnRFcXVhdGlvbn08L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgYClcbiAgICAgICAgLm9uKCdtb3VzZWRvd24nLCAnW2RhdGEtanM9XCJleHBhbmRDb2xsYXBzZUNoYXJhY3RlcnNcIl0nLCBlID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgJHRvb2xiYXIudG9nZ2xlQ2xhc3MoJ3JpY2gtdGV4dC1lZGl0b3ItY2hhcmFjdGVycy1leHBhbmRlZCcpXG4gICAgICAgIH0pXG5cbiAgICBjb25zdCAkbmV3RXF1YXRpb24gPSAkdG9vbGJhci5maW5kKCdbZGF0YS1qcz1cIm5ld0VxdWF0aW9uXCJdJylcbiAgICBjb25zdCAkbWF0aFRvb2xiYXIgPSAkdG9vbGJhci5maW5kKCdbZGF0YS1qcz1cIm1hdGhUb29sYmFyXCJdJylcbiAgICBpbml0U3BlY2lhbENoYXJhY3RlclRvb2xiYXIoJHRvb2xiYXIsIG1hdGhFZGl0b3IsIGhhc1JpY2hUZXh0Rm9jdXMpXG4gICAgaW5pdE1hdGhUb29sYmFyKCRtYXRoVG9vbGJhciwgbWF0aEVkaXRvcilcbiAgICBpbml0TmV3RXF1YXRpb24oJG5ld0VxdWF0aW9uLCBtYXRoRWRpdG9yLCBoYXNSaWNoVGV4dEZvY3VzKVxuXG4gICAgcmV0dXJuIHsgJHRvb2xiYXIgfVxufVxuXG5jb25zdCBzcGVjaWFsQ2hhcmFjdGVyVG9CdXR0b24gPSBjaGFyID0+IGA8YnV0dG9uIGNsYXNzPVwicmljaC10ZXh0LWVkaXRvci1idXR0b24gcmljaC10ZXh0LWVkaXRvci1idXR0b24tZ3JpZCR7Y2hhci5wb3B1bGFyID8gJyByaWNoLXRleHQtZWRpdG9yLWNoYXJhY3RlcnMtcG9wdWxhcicgOicnfVwiICR7Y2hhci5sYXRleENvbW1hbmQgPyBgZGF0YS1jb21tYW5kPVwiJHtjaGFyLmxhdGV4Q29tbWFuZH1cImAgOiAnJ30+JHtjaGFyLmNoYXJhY3Rlcn08L2J1dHRvbj5gXG5cbmNvbnN0IHBvcHVsYXJJbkdyb3VwID0gZ3JvdXAgPT4gZ3JvdXAuY2hhcmFjdGVycy5maWx0ZXIoY2hhcmFjdGVyID0+IGNoYXJhY3Rlci5wb3B1bGFyKS5sZW5ndGhcblxuZnVuY3Rpb24gaW5pdFNwZWNpYWxDaGFyYWN0ZXJUb29sYmFyKCR0b29sYmFyLCBtYXRoRWRpdG9yLCBoYXNBbnN3ZXJGb2N1cykge1xuICAgIGNvbnN0IGdyaWRCdXR0b25XaWR0aFB4ID0gMzVcblxuICAgICR0b29sYmFyLmZpbmQoJ1tkYXRhLWpzPVwiY2hhcmFjdGVyc0xpc3RcIl0nKVxuICAgICAgICAuYXBwZW5kKHNwZWNpYWxDaGFyYWN0ZXJHcm91cHMubWFwKGdyb3VwID0+XG4gICAgICAgICAgICBgPGRpdiBjbGFzcz1cInJpY2gtdGV4dC1lZGl0b3ItdG9vbGJhci1jaGFyYWN0ZXJzLWdyb3VwXCIgXG4gICAgICAgICAgICAgICAgICBzdHlsZT1cIndpZHRoOiAke3BvcHVsYXJJbkdyb3VwKGdyb3VwKSAqIGdyaWRCdXR0b25XaWR0aFB4fXB4XCI+XG4gICAgICAgICAgICAgICAgICAke2dyb3VwLmNoYXJhY3RlcnMubWFwKHNwZWNpYWxDaGFyYWN0ZXJUb0J1dHRvbikuam9pbignJyl9XG4gICAgICAgICAgICAgPC9kaXY+YCkpXG4gICAgICAgIC5vbignbW91c2Vkb3duJywgJ2J1dHRvbicsIGUgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAgICAgICAgIGNvbnN0IGNoYXJhY3RlciA9IGUuY3VycmVudFRhcmdldC5pbm5lclRleHRcbiAgICAgICAgICAgIGNvbnN0IGNvbW1hbmQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5jb21tYW5kXG4gICAgICAgICAgICBpZiAoaGFzQW5zd2VyRm9jdXMoKSkgd2luZG93LmRvY3VtZW50LmV4ZWNDb21tYW5kKCdpbnNlcnRUZXh0JywgZmFsc2UsIGNoYXJhY3RlcilcbiAgICAgICAgICAgIGVsc2UgbWF0aEVkaXRvci5pbnNlcnRNYXRoKGNvbW1hbmQgfHwgY2hhcmFjdGVyKVxuICAgICAgICB9KVxufVxuXG5mdW5jdGlvbiBpbml0TWF0aFRvb2xiYXIoJG1hdGhUb29sYmFyLCBtYXRoRWRpdG9yKSB7XG4gICAgJG1hdGhUb29sYmFyLmFwcGVuZChsYXRleENvbW1hbmRzXG4gICAgICAgIC5tYXAobyA9PiBgPGJ1dHRvbiBjbGFzcz1cInJpY2gtdGV4dC1lZGl0b3ItYnV0dG9uIHJpY2gtdGV4dC1lZGl0b3ItYnV0dG9uLWdyaWRcIiBkYXRhLWNvbW1hbmQ9XCIke28uYWN0aW9ufVwiIGRhdGEtbGF0ZXhjb21tYW5kPVwiJHtvLmxhYmVsfVwiIGRhdGEtdXNld3JpdGU9XCIke28udXNlV3JpdGUgfHwgZmFsc2V9XCI+XG48aW1nIHNyYz1cIi9tYXRoLnN2Zz9sYXRleD0ke2VuY29kZVVSSUNvbXBvbmVudChvLmxhYmVsID8gby5sYWJlbC5yZXBsYWNlKC9YL2csICdcXFxcc3F1YXJlJykgOiBvLmFjdGlvbil9XCIvPlxuPC9idXR0b24+YCkuam9pbignJylcbiAgICApLm9uKCdtb3VzZWRvd24nLCAnYnV0dG9uJywgZSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBjb25zdCBkYXRhc2V0ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQ7XG4gICAgICAgIG1hdGhFZGl0b3IuaW5zZXJ0TWF0aChkYXRhc2V0LmNvbW1hbmQsIGRhdGFzZXQubGF0ZXhjb21tYW5kLCBkYXRhc2V0LnVzZXdyaXRlID09PSAndHJ1ZScpXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gaW5pdE5ld0VxdWF0aW9uKCRuZXdFcXVhdGlvbiwgbWF0aEVkaXRvciwgaGFzQW5zd2VyRm9jdXMpIHtcbiAgICAkbmV3RXF1YXRpb24ubW91c2Vkb3duKChlID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGlmICghaGFzQW5zd2VyRm9jdXMoKSkgcmV0dXJuIC8vIFRPRE86IHJlbW92ZSB3aGVuIGJ1dHRvbiBpcyBvbmx5IHZpc2libGUgd2hlbiB0ZXh0YXJlYSBoYXMgZm9jdXNcbiAgICAgICAgbWF0aEVkaXRvci5pbnNlcnROZXdFcXVhdGlvbigpXG4gICAgfSkuYmluZCh0aGlzKSlcbn1cbiIsImNvbnN0IHNhbml0aXplSHRtbCA9IHJlcXVpcmUoJ3Nhbml0aXplLWh0bWwnKVxuY29uc3Qgc2FuaXRpemVPcHRzID0gcmVxdWlyZSgnLi9zYW5pdGl6ZU9wdHMnKVxuY29uc3QgbG9hZGluZ0ltZyA9IHJlcXVpcmUoJy4vbG9hZGluZ0ltZycpXG5jb25zdCBlcXVhdGlvbkltYWdlU2VsZWN0b3IgPSAnaW1nW3NyY149XCIvbWF0aC5zdmdcIl0nXG5cbmNvbnN0IFNDUkVFTlNIT1RfTElNSVRfRVJST1IgPSBuZXcgQmFjb24uRXJyb3IoJ1NjcmVlbnNob3QgbGltaXQgcmVhY2hlZCEnKVxubW9kdWxlLmV4cG9ydHMgPSB7aXNLZXksIGlzQ3RybEtleSwgaW5zZXJ0VG9UZXh0QXJlYUF0Q3Vyc29yLCBwZXJzaXN0SW5saW5lSW1hZ2VzLCBzYW5pdGl6ZSwgc2FuaXRpemVDb250ZW50LCBzZXRDdXJzb3JBZnRlciwgZXF1YXRpb25JbWFnZVNlbGVjdG9yLCB0b3RhbEltYWdlQ291bnQsIFNDUkVFTlNIT1RfTElNSVRfRVJST1J9XG5cblxuZnVuY3Rpb24gc2FuaXRpemUoaHRtbCkge1xuICAgIHJldHVybiBzYW5pdGl6ZUh0bWwoaHRtbCwgc2FuaXRpemVPcHRzKVxufVxuZnVuY3Rpb24gaW5zZXJ0VG9UZXh0QXJlYUF0Q3Vyc29yKGZpZWxkLCB2YWx1ZSkge1xuICAgIGNvbnN0IHN0YXJ0UG9zID0gZmllbGQuc2VsZWN0aW9uU3RhcnRcbiAgICBjb25zdCBlbmRQb3MgPSBmaWVsZC5zZWxlY3Rpb25FbmRcbiAgICBsZXQgb2xkVmFsdWUgPSBmaWVsZC52YWx1ZVxuICAgIGZpZWxkLnZhbHVlID0gb2xkVmFsdWUuc3Vic3RyaW5nKDAsIHN0YXJ0UG9zKSArIHZhbHVlICsgb2xkVmFsdWUuc3Vic3RyaW5nKGVuZFBvcywgb2xkVmFsdWUubGVuZ3RoKVxuICAgIGZpZWxkLnNlbGVjdGlvblN0YXJ0ID0gZmllbGQuc2VsZWN0aW9uRW5kID0gc3RhcnRQb3MgKyB2YWx1ZS5sZW5ndGhcbn1cblxuZnVuY3Rpb24gZGVjb2RlQmFzZTY0SW1hZ2UoZGF0YVN0cmluZykge1xuICAgIGlmICghZGF0YVN0cmluZylcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICBjb25zdCBtYXRjaGVzID0gZGF0YVN0cmluZy5tYXRjaCgvXmRhdGE6KFtBLVphLXotK1xcL10rKTtiYXNlNjQsKC4rKSQvKVxuICAgIGlmIChtYXRjaGVzLmxlbmd0aCAhPT0gMykge1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBtYXRjaGVzWzFdLFxuICAgICAgICBkYXRhOiBuZXcgQnVmZmVyKG1hdGNoZXNbMl0sICdiYXNlNjQnKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gaXNLZXkoZSwga2V5KSB7IHJldHVybiBwcmV2ZW50SWZUcnVlKGUsICFlLmFsdEtleSAmJiAhZS5zaGlmdEtleSAmJiAhZS5jdHJsS2V5ICAmJiBrZXlPcktleUNvZGUoZSwga2V5KSl9XG5cbmZ1bmN0aW9uIGlzQ3RybEtleShlLCBrZXkpIHsgcmV0dXJuIHByZXZlbnRJZlRydWUoZSwgIWUuYWx0S2V5ICYmICFlLnNoaWZ0S2V5ICYmIGUuY3RybEtleSAmJiBrZXlPcktleUNvZGUoZSwga2V5KSl9XG5cbmZ1bmN0aW9uIGtleU9yS2V5Q29kZShlLCB2YWwpIHsgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnID8gZS5rZXkgPT09IHZhbCA6IGUua2V5Q29kZSA9PT0gdmFsIH1cbmZ1bmN0aW9uIHByZXZlbnRJZlRydWUoZSwgdmFsKSB7XG4gICAgaWYodmFsKSBlLnByZXZlbnREZWZhdWx0KClcbiAgICByZXR1cm4gdmFsXG59XG5cbmZ1bmN0aW9uIHNhbml0aXplQ29udGVudChhbnN3ZXJFbGVtZW50KSB7XG4gICAgY29uc3QgJGFuc3dlckVsZW1lbnQgPSAkKGFuc3dlckVsZW1lbnQpXG4gICAgY29uc3QgJG1hdGhFZGl0b3IgPSAkYW5zd2VyRWxlbWVudC5maW5kKCdbZGF0YS1qcz1cIm1hdGhFZGl0b3JcIl0nKVxuICAgICRtYXRoRWRpdG9yLmhpZGUoKVxuICAgIGNvbnN0IHRleHQgPSAkYW5zd2VyRWxlbWVudC50ZXh0KClcbiAgICAkbWF0aEVkaXRvci5zaG93KClcblxuICAgIGNvbnN0IGh0bWwgPSBzYW5pdGl6ZSgkYW5zd2VyRWxlbWVudC5odG1sKCkpXG5cbiAgICByZXR1cm4geyBhbnN3ZXJIVE1MOiBodG1sLCBhbnN3ZXJUZXh0OiB0ZXh0IH1cbn1cblxuZnVuY3Rpb24gc2V0Q3Vyc29yQWZ0ZXIoJGltZykge1xuICAgIGNvbnN0IHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKVxuICAgIGNvbnN0IGltZyA9ICRpbWcuZ2V0KDApXG4gICAgY29uc3QgbmV4dFNpYmxpbmcgPSBpbWcubmV4dFNpYmxpbmcgJiYgaW1nLm5leHRTaWJsaW5nLnRhZ05hbWUgPT09ICdCUicgPyBpbWcubmV4dFNpYmxpbmcgOiBpbWdcbiAgICByYW5nZS5zZXRTdGFydChuZXh0U2libGluZywgMClcbiAgICByYW5nZS5zZXRFbmQobmV4dFNpYmxpbmcsIDApXG4gICAgY29uc3Qgc2VsID0gd2luZG93LmdldFNlbGVjdGlvbigpXG4gICAgc2VsLnJlbW92ZUFsbFJhbmdlcygpXG4gICAgc2VsLmFkZFJhbmdlKHJhbmdlKVxufVxuXG5mdW5jdGlvbiBtYXJrQW5kR2V0SW5saW5lSW1hZ2VzKCRlZGl0b3IpIHtcbiAgICBjb25zdCBpbWFnZXMgPSAkZWRpdG9yLmZpbmQoJ2ltZ1tzcmNePVwiZGF0YVwiXScpLnRvQXJyYXkoKVxuICAgICAgICAubWFwKChlbCwgaW5kZXgpID0+IE9iamVjdC5hc3NpZ24oZGVjb2RlQmFzZTY0SW1hZ2UoZWwuZ2V0QXR0cmlidXRlKCdzcmMnKSksIHtcbiAgICAgICAgICAgICRlbDogJChlbClcbiAgICAgICAgfSkpXG4gICAgaW1hZ2VzLmZpbHRlcigoe3R5cGV9KSA9PiB0eXBlICE9PSAnaW1hZ2UvcG5nJykuZm9yRWFjaCgoeyRlbH0pID0+ICRlbC5yZW1vdmUoKSlcbiAgICBjb25zdCBwbmdJbWFnZXMgPSBpbWFnZXMuZmlsdGVyKCh7dHlwZX0pID0+IHR5cGUgPT09ICdpbWFnZS9wbmcnKVxuICAgIHBuZ0ltYWdlcy5mb3JFYWNoKCh7JGVsfSkgPT4gJGVsLmF0dHIoJ3NyYycsIGxvYWRpbmdJbWcpKVxuICAgIHJldHVybiBwbmdJbWFnZXNcbn1cblxuZnVuY3Rpb24gZXhpc3RpbmdTY3JlZW5zaG90Q291bnQoJGVkaXRvcikge1xuICAgIGNvbnN0IGltYWdlQ291bnQgPSAkZWRpdG9yLmZpbmQoJ2ltZycpLmxlbmd0aFxuICAgIGNvbnN0IGVxdWF0aW9uQ291bnQgPSAkZWRpdG9yLmZpbmQoZXF1YXRpb25JbWFnZVNlbGVjdG9yKS5sZW5ndGhcbiAgICByZXR1cm4gaW1hZ2VDb3VudCAtIGVxdWF0aW9uQ291bnRcbn1cblxuZnVuY3Rpb24gY2hlY2tGb3JJbWFnZUxpbWl0KCRlZGl0b3IsIGltYWdlRGF0YSwgbGltaXQpIHtcbiAgICByZXR1cm4gQmFjb24ub25jZShleGlzdGluZ1NjcmVlbnNob3RDb3VudCgkZWRpdG9yKSA+IGxpbWl0ID8gbmV3IEJhY29uLkVycm9yKCkgOiBpbWFnZURhdGEpXG59XG5cbmZ1bmN0aW9uIHBlcnNpc3RJbmxpbmVJbWFnZXMoJGVkaXRvciwgc2NyZWVuc2hvdFNhdmVyLCBzY3JlZW5zaG90Q291bnRMaW1pdCwgb25WYWx1ZUNoYW5nZWQpIHtcbiAgICBCYWNvbi5jb21iaW5lQXNBcnJheShtYXJrQW5kR2V0SW5saW5lSW1hZ2VzKCRlZGl0b3IpXG4gICAgICAgIC5tYXAoZGF0YSA9PiBjaGVja0ZvckltYWdlTGltaXQoJGVkaXRvciwgZGF0YSwgc2NyZWVuc2hvdENvdW50TGltaXQpXG4gICAgICAgICAgICAuZG9FcnJvcigoKSA9PiBvblZhbHVlQ2hhbmdlZChTQ1JFRU5TSE9UX0xJTUlUX0VSUk9SKSlcbiAgICAgICAgICAgIC5mbGF0TWFwTGF0ZXN0KCgpID0+IEJhY29uLmZyb21Qcm9taXNlKHNjcmVlbnNob3RTYXZlcihkYXRhKSkpXG4gICAgICAgICAgICAuZG9BY3Rpb24oc2NyZWVuU2hvdFVybCA9PiBkYXRhLiRlbC5hdHRyKCdzcmMnLCBzY3JlZW5TaG90VXJsKSlcbiAgICAgICAgICAgIC5kb0Vycm9yKCgpID0+IGRhdGEuJGVsLnJlbW92ZSgpKSlcbiAgICApLm9uVmFsdWUoayA9PiAkZWRpdG9yLnRyaWdnZXIoJ2lucHV0JykpXG59XG5cbmZ1bmN0aW9uIHRvdGFsSW1hZ2VDb3VudCgkYW5zd2VyLCBjbGlwYm9hcmREYXRhQXNIdG1sKSB7XG4gICAgcmV0dXJuIGV4aXN0aW5nU2NyZWVuc2hvdENvdW50KCRhbnN3ZXIpICsgZXhpc3RpbmdTY3JlZW5zaG90Q291bnQoJChgPGRpdj4ke2NsaXBib2FyZERhdGFBc0h0bWx9PC9kaXY+YCkpXG59XG4iXX0=
