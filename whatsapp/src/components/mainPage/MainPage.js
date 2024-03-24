import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as messageActions from "../../redux/actions/messageActions";
import * as userActions from "../../redux/actions/userActions";
import './mainPage.css';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MoodIcon from '@mui/icons-material/Mood';
import AddIcon from '@mui/icons-material/Add';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import SendIcon from '@mui/icons-material/Send';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import Modal from 'react-modal';
import { Transition } from 'react-transition-group';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import StarIcon from '@mui/icons-material/Star';
import NotificationsIcon from '@mui/icons-material/Notifications';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import LockIcon from '@mui/icons-material/Lock';
import NotInterestedIcon from '@mui/icons-material/NotInterested';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import DeleteIcon from '@mui/icons-material/Delete';
import DescriptionIcon from '@mui/icons-material/Description';
import CollectionsIcon from '@mui/icons-material/Collections';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import PersonIcon from '@mui/icons-material/Person';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import CloseIcon from '@mui/icons-material/Close';



const NewPagePerson = ({ onClose, currentUser }) => {
    const transitionStyles = {
        entering: { transform: 'translateX(0)', transition: 'transform 20s' },
        entered: { transform: 'translateX(0)' }
    };

    return (
        <Transition in={true} timeout={2000}>
            {state => (
                <div className="new-page-person" style={{ ...transitionStyles[state], width: '30%', height: 790, backgroundColor: 'white', position: 'absolute', top: 0, right: 0, zIndex: 999 }}>
                    <div>
                        <div className='personTopBg'>
                            <div>
                                <ArrowBackIcon onClick={onClose} style={{ color: '#54656F', fontSize: 24, position: 'relative', top: 30, left: 30, cursor: 'pointer' }} />
                            </div>
                            <div>
                                <span style={{ color: '#54656F', fontSize: 18, position: 'relative', top: 30, left: 40 }}>Kişi bilgisi</span>
                            </div>
                        </div>
                        <div className="personİnformationContainer">
                            <div className="PersonMain">
                                <div className="personİmage">
                                    <img style={{ width: 200, height: 200, borderRadius: 100 }} src={currentUser.photos} alt={currentUser.userName} />
                                </div>
                                <div className="personİnformation">
                                    <div className="personName">
                                        <span className="personNameText">{currentUser.userName}</span>
                                    </div>
                                    <div className="personPhoneNumber">
                                        <span className="personPhoneNumberText">{currentUser.phoneNumber}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="aboutMe">
                                <div className="aboutMee">
                                    <div className="aboutMeTitle">
                                        <span className="aboutMeTitleText">Hakkımda</span>
                                    </div>
                                    <div className="aboutMeDesc">
                                        <span className="aboutMeText">{currentUser.aboutMe}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="mediaConnectvb">
                                <div className="mediaMainText">
                                    <span className="mediaText">Medya, bağlantı ve belgeler</span>
                                </div>
                                <div className="navigatonLink">
                                    <div>
                                        <span style={{ color: '#54656F' }}>0</span>
                                    </div>
                                    <div>
                                        <KeyboardArrowRightIcon style={{ color: '#54656F' }} />
                                    </div>
                                </div>
                            </div>
                            <div className="personSelectMainOptions">
                                <div className="personSelectOptions">
                                    <div className="selectedPersonOptions">
                                        <div>
                                            <StarIcon style={{ color: '#54656F', fontSize: 18 }} />
                                        </div>
                                        <div className="optionsNameSelect">
                                            <span style={{ fontSize: 18 }}>Yıldızlı mesajlar</span>
                                        </div>
                                    </div>
                                    <div className="selectedPersonOptions">
                                        <div>
                                            <NotificationsIcon style={{ color: '#54656F', fontSize: 18 }} />
                                        </div>
                                        <div className="optionsNameSelect">
                                            <span style={{ fontSize: 18 }}>Bildirimleri sessize al</span>
                                        </div>
                                    </div>
                                    <div className="selectedPersonOptions">
                                        <div>
                                            <QueryBuilderIcon style={{ color: '#54656F', fontSize: 18 }} />
                                        </div>
                                        <div className="optionsNameSelect">
                                            <span style={{ fontSize: 18 }}>Süreli mesajlar</span>
                                            <span style={{ fontSize: 14 }}>Kapalı</span>
                                        </div>
                                    </div>
                                    <div className="selectedPersonOptions">
                                        <div>
                                            <LockIcon style={{ color: '#54656F', fontSize: 18 }} />
                                        </div>
                                        <div className="optionsNameSelect">
                                            <span style={{ fontSize: 18 }}>Şifreleme</span>
                                            <span style={{ fontSize: 14, marginRight: 25 }}>Mesajlar uçtan uca şifrelidir. Doğrulamak için tıklayın.</span>
                                        </div>
                                    </div>
                                    <div className="selectedPersonOptions">
                                        <div>
                                            <NotInterestedIcon style={{ color: '#EA0038', fontSize: 24 }} />
                                        </div>
                                        <div className="optionsNameSelect">
                                            <span style={{ fontSize: 18, color: '#EA0038' }}>{currentUser.userName} AL'ını engelle</span>
                                        </div>
                                    </div>
                                    <div className="selectedPersonOptions">
                                        <div>
                                            <ThumbDownIcon style={{ color: '#EA0038', fontSize: 24 }} />
                                        </div>
                                        <div className="optionsNameSelect">
                                            <span style={{ fontSize: 18, color: '#EA0038' }}>{currentUser.userName} kişisini şikayet et</span>
                                        </div>
                                    </div>
                                    <div className="selectedPersonOptions">
                                        <div>
                                            <DeleteIcon style={{ color: '#EA0038', fontSize: 24 }} />
                                        </div>
                                        <div className="optionsNameSelect">
                                            <span style={{ fontSize: 18, color: '#EA0038' }}>Sohbeti sil</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Transition>
    );
}


class MainPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            textEntered: '',
            messagesOpen: true,
            modalIsOpen: false,
            newPagePersonModalOpen: false
        };
    }

    componentDidMount() {
        const { currentUser, messages, actions } = this.props;
        // Eğer mesajlar zaten yüklenmediyse ve kullanıcı seçilmişse, mesajları yükle
        if (!messages || messages.length === 0) {
            if (currentUser && currentUser.id) {
                actions.getMessages(currentUser.id);
            }
        }
        actions.getUsers();
    }

    componentDidUpdate(prevProps) {
        const { currentUser, actions } = this.props;
        if (currentUser && currentUser.id && currentUser.id !== prevProps.currentUser.id) {
            actions.getMessages(currentUser.id);
        }
    }

    handleInputChange = (event) => {
        this.setState({ textEntered: event.target.value });
    }

    toggleModal = () => {
        this.setState(prevState => ({
            modalIsOpen: !prevState.modalIsOpen
        }));
    }

    toggleNewPagePersonModal = () => {
        this.setState(prevState => ({
            newPagePersonModalOpen: !prevState.newPagePersonModalOpen
        }));
    }

    toggleMessages = () => {
        // Sohbeti kapattıktan sonra sayfayı yenile
        this.setState(prevState => ({
            messagesOpen: !prevState.messagesOpen
        }), () => {
            if (!this.state.messagesOpen) {
                window.location.reload(); // Sayfayı yenile
            }
        });
    }

    toggleNewPagePerson = () => {
        this.setState(prevState => ({
            isNewPageOpen: !prevState.isNewPageOpen,
            modalIsOpen: false // Ayarlar menüsünü kapat
        }), () => {
            if (this.state.isNewPageOpen) {
                document.body.classList.add('new-page-opened');
            } else {
                document.body.classList.remove('new-page-opened');
            }
        });
    }

    render() {
        const { messages } = this.props;
        if (!messages || messages.length === 0 || !this.state.messagesOpen) {
            return (
                <div className="noChat">
                    <img className="noChatİmage" src={require('./mainImage/noChatImage.png')} alt="Resim" />
                </div>
            )
        }
        return (
            <div className="main">
                <div>
                    {this.props.currentUser && (
                        <div className="navbarUser">
                            <div className="userPhotoAndNameTime">
                                <div>
                                    <img className="photos" src={this.props.currentUser.photos} alt="resim" />
                                </div>
                                <div className="userNameAndTime">
                                    <span className="userName">{this.props.currentUser.userName}</span>
                                    <span className="userTime">{this.props.currentUser.time}</span>
                                </div>
                                <div className="mainNavİcon">
                                    <SearchIcon style={{ color: 'gray', fontSize: 32, position: 'absolute', right: 5 }} />
                                    <MoreVertIcon style={{ color: 'gray', fontSize: 32, position: 'absolute', left: 15 }} onClick={this.toggleModal} />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    style={{
                        overlay: {
                            zIndex: 9998,
                            backgroundColor: 'rgb(0,0,0,0)',
                            position: 'fixed',
                            top: '40px',
                            left: '1210px',
                            width: '150px',
                            height: '300px',
                            borderRadius: '10px',
                        },
                        content: {
                            width: '250px',
                            height: '360px',
                            backgroundColor: 'white',
                            borderRadius: '5px',
                            boxShadow: 'none',
                            padding: 0
                        }
                    }}
                >
                    <div style={{ width: '100%', height: '100%', padding: 0 }}>
                        <div className='toggleModalMain'>
                            <div className='toggleOptions' onClick={this.toggleNewPagePerson}>
                                <span className='toglleText'>Kişi bilgisi</span>
                            </div>
                            <div className='toggleOptions'>
                                <span className='toglleText'>Mesaj seç</span>
                            </div>
                            <div className='toggleOptions' onClick={this.toggleMessages}>
                                <span className='toglleText'>Sohbeti kapat</span>
                            </div>
                            <div className='toggleOptions'>
                                <span className='toglleText'>Bildirimleri sessize al</span>
                            </div>
                            <div className='toggleOptions'>
                                <span className='toglleText'>Süreli mesajlar</span>
                            </div>
                            <div className='toggleOptions'>
                                <span className='toglleText'>Sohbeti temizle</span>
                            </div>
                            <div className='toggleOptions'>
                                <span className='toglleText'>Sohbeti sil</span>
                            </div>
                            <div className='toggleOptions'>
                                <span className='toglleText'>Şikayet et</span>
                            </div>
                            <div className='toggleOptions'>
                                <span className='toglleText'>Engelle</span>
                            </div>
                        </div>
                    </div>
                </Modal>
                {this.state.isNewPageOpen && <NewPagePerson onClose={this.toggleNewPagePerson} currentUser={this.props.currentUser} />}
                <div className="mainChat">
                    {messages.map(message => (
                        <div key={message.id}>
                            <div className="messageİnformation">
                                <div className="sendMessage">
                                    <span className="sendMessageText">{message.messageSend}</span>
                                    <span className="timesText">{message.sendTime}</span>
                                    <DoneAllIcon style={{ position: 'relative', marginRight: 10, left: 5, top: 10, fontSize: 20, color: "#53BDEB" }} size={22} />
                                </div>
                                <div className="incomingMessage">
                                    <span className="incomingMessageText">{message.messageİncoming}</span>
                                    <span className="timesText">{message.incomingTime}</span>
                                </div>
                                <div className="incomingMessage2">
                                    <span className="incomingMessageText">{message.messageİncoming2}</span>
                                    <span className="timesText">{message.incomingTime}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="chatInputMain">
                        <div className="inputİcons">
                            <MoodIcon style={{ color: 'gray', fontSize: 28 }} />
                            {this.state.newPagePersonModalOpen ? (
                                <CloseIcon style={{ color: 'gray', fontSize: 28, position: 'relative', left: 10 }} onClick={this.toggleNewPagePersonModal} />
                            ) : (
                                <AddIcon style={{ color: 'gray', fontSize: 28, position: 'relative', left: 10 }} onClick={this.toggleNewPagePersonModal} />
                            )}
                        </div>
                        <div className="inputMain">
                            <input className="textİnput" type='text' placeholder="Bir mesaj yazın" onChange={this.handleInputChange} />
                        </div>
                        <div>
                            {this.state.textEntered ? (
                                <SendIcon style={{ fontSize: 32, position: 'relative', left: 10, top: 13, cursor: 'pointer' }} />
                            ) : (
                                <KeyboardVoiceIcon style={{ fontSize: 32, position: 'relative', left: 10, top: 13, cursor: 'pointer' }} />
                            )}
                        </div>
                    </div>
                    <Modal
                        isOpen={this.state.newPagePersonModalOpen}
                        onRequestClose={this.toggleNewPagePersonModal}
                        style={{
                            overlay: {
                                zIndex: 9998,
                                backgroundColor: 'rgb(0,0,0,0)',
                                position: 'fixed',
                                top: '380px',
                                left: '470px',
                                width: '150px',
                                height: '300px',
                                borderRadius: '10px',
                            },
                            content: {
                                width: '230px',
                                height: '320px',
                                backgroundColor: 'white',
                                borderRadius: '25px',
                                boxShadow: 'none',
                                padding: 0
                            }
                        }}
                    >
                        {/* Modal içeriği */}
                        <div style={{ backgroundColor: 'white' }}>
                            <div className="containerPlus">
                                <div className="plusMain">
                                    <div className="plusİconOptions">
                                        <div>
                                            <DescriptionIcon style={{ color: '#7F66FF', position: 'relative', left: 10 }} />
                                        </div>
                                        <div className="plusMainContent">
                                            <span className="plusMainText">Belge</span>
                                        </div>
                                    </div>
                                    <div className="plusİconOptions">
                                        <div>
                                            <CollectionsIcon style={{ color: '#007BFC', position: 'relative', left: 10 }} />
                                        </div>
                                        <div className="plusMainContent">
                                            <span className="plusMainText">Fotoğraflar ve videolar</span>
                                        </div>
                                    </div>
                                    <div className="plusİconOptions">
                                        <div>
                                            <CameraAltIcon style={{ color: '#FF2E74', position: 'relative', left: 10 }} />
                                        </div>
                                        <div className="plusMainContent">
                                            <span className="plusMainText">Kamera</span>
                                        </div>
                                    </div>
                                    <div className="plusİconOptions">
                                        <div>
                                            <PersonIcon style={{ color: '#009DE2', position: 'relative', left: 10 }} />
                                        </div>
                                        <div className="plusMainContent">
                                            <span className="plusMainText">Kişi</span>
                                        </div>
                                    </div>
                                    <div className="plusİconOptions">
                                        <div>
                                            <EqualizerIcon style={{ color: '#FFBC38', position: 'relative', left: 10 }} />
                                        </div>
                                        <div className="plusMainContent">
                                            <span className="plusMainText">Anket</span>
                                        </div>
                                    </div>
                                    <div className="plusİconOptions">
                                        <div>
                                            <CreateNewFolderIcon style={{ color: '#02A698', position: 'relative', left: 10 }} />
                                        </div>
                                        <div className="plusMainContent">
                                            <span className="plusMainTextContent">Yeni çıkartma </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        currentUser: state.changeUserReducer,
        messages: state.messageListReducer,
        users: state.userListReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getUsers: bindActionCreators(userActions.getUsers, dispatch),
            changeUser: bindActionCreators(userActions.changeUser, dispatch),
            getMessages: bindActionCreators(messageActions.getMessages, dispatch)
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(MainPage)