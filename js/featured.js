// Read counts saved by main script and display sorted list
(function () {
    const el = document.getElementById('featured-list')
    let counts = {}
    try {
        const raw = localStorage.getItem('wuwamash_counts')
        counts = raw ? JSON.parse(raw) : {}
    } catch (e) {
        console.error('Failed to read counts', e)
    }

    const entries = Object.entries(counts)
    if (!entries.length) {
        el.innerText = 'No data available.'
        return
    }

    // build filename-to-name map
    const nameByFilename = {}
    if (typeof girlsData !== 'undefined' && girlsData) {
        Object.keys(girlsData).forEach(k => {
            const fn = (k || '').split('/').pop()
            if (fn) nameByFilename[fn] = girlsData[k]

            // also store possible normalized keys
            const noDot = k.replace(/^\.\//, '') // images/0001.webp
            const justName = noDot.split('/').pop() // 0001.webp
            if (justName && !nameByFilename[justName]) nameByFilename[justName] = girlsData[k]
        })
    }

    // sort descending by count
    entries.sort((a, b) => b[1] - a[1])

    // build UI: show all entries (or limit to top N)
    const topN = Math.min(entries.length, 5)
    el.innerHTML = ''
    for (let i = 0; i < topN; i++) {
        const [rawPath, cnt] = entries[i]
        const filename = (rawPath || '').split('/').pop() || ''

        // image src should be relative to featured.html (assumed in project root)
        const src = filename ? `../images/${filename}` : (rawPath || '')

        const div = document.createElement('div')
        div.className = 'item'

        const img = document.createElement('img')
        img.src = src
        img.alt = name

        const info = document.createElement('div')
        info.innerHTML = `<div>#${i + 1}</div><div class="count">${cnt} votes</div>`

        div.appendChild(img)
        div.appendChild(info)
        el.appendChild(div)
    }
})()