const contentData = {
    bahasa: {
        title: "Bahasa Indonesia",
        content: `
            <h3 class="text-xl font-semibold">Pembelajaran Bahasa Indonesia</h3>
            <ul class="list-disc pl-5">
                <li>Pengembangan keterampilan berbahasa</li>
                <li>Analisis teks dan konteks</li>
                <li>Literasi digital</li>
            </ul>
        `
    },
    sejarah: {
        title: "Sejarah",
        content: `
            <h3 class="text-xl font-semibold">Pembelajaran Sejarah</h3>
            <ul class="list-disc pl-5">
                <li>Perjuangan kemerdekaan</li>
                <li>Pembentukan negara</li>
                <li>Perkembangan demokrasi</li>
            </ul>
        `
    },
    ppkn: {
        title: "PPKn",
        content: `
            <h3 class="text-xl font-semibold">Pembelajaran PPKn</h3>
            <ul class="list-disc pl-5">
                <li>Nilai Pancasila dalam kehidupan modern</li>
                <li>Etika bermedia sosial</li>
                <li>Partisipasi digital</li>
            </ul>
        `
    },
    sosiologi: {
        title: "Sosiologi",
        content: `
            <h3 class="text-xl font-semibold">Pembelajaran Sosiologi</h3>
            <ul class="list-disc pl-5">
                <li>Perubahan sosial di era digital</li>
                <li>Interaksi sosial modern</li>
                <li>Isu-isu sosial kontemporer</li>
            </ul>
        `
    }
};

function showContent(id) {
    const content = contentData[id];
    if (content) {
        document.getElementById('contentTitle').textContent = content.title;
        document.getElementById('contentBody').innerHTML = content.content;
        document.getElementById('contentDisplay').classList.remove('hidden');
        document.getElementById('contentDisplay').scrollIntoView({ behavior: 'smooth' });
    }
}

function hideContent() {
    document.getElementById('contentDisplay').classList.add('hidden');
}
