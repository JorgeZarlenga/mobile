import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.50.241',
});

export default api;

// IOS com emulador: Usar localhost
// IOS com físico: IP da máquina

// Android com emulador (usa máquina virtual): localhost - Usar comando adb reverse tcp:3333 (máquina) tcp:3333 (emulador)
// Android com Emulador do Android Studio: 10.0.2.2
// Android com Emulador Genymotion: 10.0.3.2
// Android com dispositivo físico: IP da máquina