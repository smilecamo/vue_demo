self.addEventListener('message', (e) => {
    var data = e.data
    switch (data.type) {
        case 'start':
            console.log(data);
            break;
        case 'stop':
            console.log(data);
            self.close()
            break;
        case 'send':
            console.log(data);
            break;
    }
})