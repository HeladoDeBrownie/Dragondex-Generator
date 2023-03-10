void function () {
    'use strict'

    var $ = document.getElementById.bind(document)

    function show(result, isResultOfError) {
        if (isResultOfError === undefined) {
            isResultOfError = false
        }

        if (isResultOfError) {
            $('result').innerHTML = result
        } else {
            location.hash = encodeURIComponent(result)
        }
    }

    function withoutHash(string) {
        return string.replace(/^#/, '')
    }

    addEventListener('error', show.bind(null, 'Oops, something broke.', true))
    $('back').addEventListener('click', function () { history.back() })

    function handleHashChange() {
        var result = decodeURIComponent(withoutHash(location.hash))
        $('result').innerHTML = result
    }

    addEventListener('hashchange', handleHashChange)

    var rerollElement = $('reroll')

    rerollElement.addEventListener('click', function () {
        show(grammar.flatten('#origin#'))
    })

    if (withoutHash(location.hash) === '') {
        rerollElement.click()
    } else {
        handleHashChange()
    }
}()
