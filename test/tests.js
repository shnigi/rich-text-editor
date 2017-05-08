describe('math editor', () => {
    const $answer1 = $('.answer1')
    const pasteEventMock = {
        type: 'paste', originalEvent: {
            clipboardData: {
                getData: () => {
                }
            }
        }
    }

    before('wait for tools to hide', window.waitUntil(() => $('[data-js="tools"]').length > 0 && $('[data-js="tools"]').position().top < 0))

    describe('init', () => {
        it('answer field is contenteditable', () => {
            const $answer = $('[data-js="answer"]')
            expect($answer).to.have.attr('contenteditable', 'true')
        })
    })

    describe('focus rich text', () => {
        before(() => $answer1.focus())
        before('wait for tools visible', window.waitUntil(() => $('[data-js="tools"]').is(':visible')))

        it('shows character list', () => expect($('[data-js="charactersList"]')).to.be.visible)
        it('hide math tools', () => expect($('[data-js="mathToolbar"]')).to.be.hidden)

        describe('pasting images', () => {
            describe('png', () => {
                before(done => {
                    $answer1
                        .append(window.PNG_IMAGE)
                    $answer1.find('img:last').get(0).onload = e => {
                        if (e.target.src.startsWith('http')) done()
                    }
                    $answer1.trigger(pasteEventMock)
                })
                it('saves pasted image', () => {
                    expect($answer1.find('img:last')).to.have.attr('src').match(/\/screenshot/)
                })
            })
            describe('not png', () => {
                let currentImgAmout
                before(done => {
                    currentImgAmout = $answer1.find('img').length
                    $answer1
                        .append('<img src="data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=">')
                    $('.answer1 img:last').get(0).onload = e => {
                        done()
                    }
                    $answer1.trigger(pasteEventMock)
                })
                it('ignores other than png images', () => {
                    expect($answer1.find('img').length).to.equal(currentImgAmout)
                })
            })
        })

        describe('start math', () => {
            before(() => $answer1.focus())
            before('wait for tools visible', window.waitUntil(() => $('[data-js="tools"]').is(':visible')))
            before(() => $('[data-js="newEquation"]').mousedown())

            it('shows math tools', () => expect($('[data-js="mathToolbar"]')).to.be.visible)
            it('shows math editor', () => expect($('[data-js="mathEditor"]')).to.be.visible)

            describe('keeps equation field in sync', () => {
                before(() => $('[data-js="latexField"]').focus().val('xy').trigger('input'))
                before(done => setTimeout(done, 0))
                before(() => $answer1.focus())

                it('shows math in equation field', () => {
                    expect($('[data-js="equationField"]')).to.have.text('xy')
                })
                it('shows math in img', () => expect($('img:first')).to.have.attr('src', '/math.svg?latex=xy'))
            })

            describe('keeps latex field in sync', () => {
                before(() => $('img:first').trigger({type: 'click', which: 1}))
                before(() => $('[data-js="latexField"]').val('').trigger('input'))
                before(() => $('[data-js="equationField"] textarea').val('a+b').trigger('paste'))
                before(done => setTimeout(done, 100))
                before(() => $answer1.focus())

                it('shows math in latex field', () => {
                    expect($('[data-js="latexField"]')).to.have.value('a+b')
                })
                it('shows math in img', () => expect($('img:first')).to.have.attr('src', '/math.svg?latex=a%2Bb'))
            })
        })
    })
})
