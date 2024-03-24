import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from "../../redux/actions/userActions";
import * as messageActions from "../../redux/actions/messageActions";
import './userList.css';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import GroupsIcon from '@mui/icons-material/Groups';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import VoiceChatIcon from '@mui/icons-material/VoiceChat';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import Modal from 'react-modal';
import { Transition } from 'react-transition-group';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LockIcon from '@mui/icons-material/Lock';
import SecurityIcon from '@mui/icons-material/Security';
import Brightness6Icon from '@mui/icons-material/Brightness6';
import PhotoIcon from '@mui/icons-material/Photo';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import DescriptionIcon from '@mui/icons-material/Description';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import HelpIcon from '@mui/icons-material/Help';
import LogoutIcon from '@mui/icons-material/Logout';
import GroupIcon from '@mui/icons-material/Group';
import AddIcon from '@mui/icons-material/Add';
import { Link } from '@mui/material';
import { Button } from 'reactstrap';




const NewPageCommunity = ({ onClose }) => {

    const transitionStyles = {
        entering: { transform: 'translateX(0)', transition: 'transform 20s' },
        entered: { transform: 'translateX(0)' }
    };

    return (
        <Transition in={true} timeout={2000}>
            {state => (
                <div className="new-page" style={{ ...transitionStyles[state], width: '100%', height: 790, backgroundColor: 'white', position: 'absolute', top: 0 }}>
                    <div className='settingTopBg'>
                        <div>
                            <ArrowBackIcon onClick={onClose} style={{ color: 'white', fontSize: 28, position: 'relative', top: 70, left: 30, cursor: 'pointer' }} />
                        </div>
                        <div>
                            <span style={{ color: 'white', fontSize: 24, position: 'relative', top: 65, left: 60 }}>Topluluklar</span>
                        </div>
                    </div>
                    <div className='communityContainer'>
                        <div className='communityİmage'></div>
                        <div className='communityTotalText'>
                            <div>
                                <span className='communityText1'>Topluluklar sayesinde bağlantıda kalın</span>
                            </div>
                            <div className='communityMainText2'>
                                <span className='communityText2'>Topluluklar, üyelerin konulara göre ayrılmış gruplarda bir araya gelmelerini sağlar ve yönetici duyurularını almalarını kolaylaştırır. Eklendiğiniz tüm topluluklar burada görüntülenir.</span>
                            </div>
                            <div className='communityLink'>
                                <Link style={{ color: '#00A884', cursor: 'pointer', textDecorationColor: '#00A884' }} className='communityTextLink'>Örnek topluluklara bakın</Link>
                            </div>
                            <div className='communitiyAddButton'>
                                <Button style={{ backgroundColor: '#017561', color: 'white', fontWeight: '600', borderRadius: 30 }}>Topluluğunuzu oluşturun</Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Transition>
    );
}

const NewPageStatus = ({ onClose, users }) => {

    const transitionStyles = {
        entering: { transform: 'translateX(0)', transition: 'transform 20s' },
        entered: { transform: 'translateX(0)' }
    };

    return (
        <Transition in={true} timeout={2000}>
            {state => (
                <div className="new-page" style={{ ...transitionStyles[state], width: '100%', height: 790, backgroundColor: 'white', position: 'absolute', top: 0 }}>
                    <div className='settingTopBg'>
                        <div>
                            <ArrowBackIcon onClick={onClose} style={{ color: 'white', fontSize: 28, position: 'relative', top: 70, left: 30, cursor: 'pointer' }} />
                        </div>
                        <div>
                            <span style={{ color: 'white', fontSize: 24, position: 'relative', top: 65, left: 60 }}>Durum</span>
                        </div>
                    </div>
                    <div className='statusContainer'>
                        <div className='statusContainer1'>
                            <div className='statusPerson'>
                                <div>
                                    <img className='statusPersonPhoto' src='https://images.assetsdelivery.com/compings_v2/salamatik/salamatik1801/salamatik180100019.jpg' alt='resim' />
                                </div>
                                <div className='statusPersonText'>
                                    <div>
                                        <span className='statusPersonText1'>Durumum</span>
                                    </div>
                                    <div>
                                        <span className='statusPersonText2'>Güncelleme yok</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='statusContainer2'>
                            <div className='Statustitle'>
                                <span className='StatustitleText'>EN YENİ</span>
                            </div>
                        </div>
                        <div>
                            {users.map(user => (
                                // Kullanıcı adı "Mustafa Danışan" olanı filtrele
                                user.userName !== 'Mustafa Danışan(Siz)' ? (
                                    <div className='statusPersonUser' key={user.id}>
                                        <div className='statusPersonUserİmage'>
                                            <img style={{ width: 50, height: 50, borderRadius: 25, position: 'relative', marginLeft: 15, marginBottom: 25 }} src={user.photos} alt='resim' />
                                        </div>
                                        <div className='statusPersonUserNameAndTime'>
                                            <div className='statusPersonUserName'>
                                                <span className='statusPersonUserNameText'>{user.userName}</span>
                                            </div>
                                            <div className='statusPersonUserTime'>
                                                <span className='statusPersonUserTimeText'>ÖÖ {user.time}</span>
                                            </div>
                                        </div>
                                    </div>
                                ) : null
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </Transition>
    );
}

const NewPageChannels = ({ onClose }) => {

    const transitionStyles = {
        entering: { transform: 'translateX(0)', transition: 'transform 20s' },
        entered: { transform: 'translateX(0)' }
    };

    return (
        <Transition in={true} timeout={2000}>
            {state => (
                <div className="new-page" style={{ ...transitionStyles[state], width: '100%', height: 790, backgroundColor: 'white', position: 'absolute', top: 0 }}>
                    <div className='settingTopBg'>
                        <div>
                            <ArrowBackIcon onClick={onClose} style={{ color: 'white', fontSize: 28, position: 'relative', top: 70, left: 30, cursor: 'pointer' }} />
                            <AddIcon style={{ color: 'white', fontSize: 28, position: 'relative', top: 70, left: 400, cursor: 'pointer' }} />
                        </div>
                        <div>
                            <span style={{ color: 'white', fontSize: 24, position: 'relative', top: 65, left: 60 }}>Kanallar</span>
                        </div>
                    </div>
                    <div className='channelMainOptions'>
                        <div className='channelOptionsOne'>
                            <span className='channelOptionsOneText'>İlginizi çeken konular hakkındaki en güncel bilgilere ulaşın</span>
                        </div>
                        <div className='channelOptionsTwo'>
                            <span className='channelOptionsTwoText'>Aşşağıdan takip etmek istediğiniz kanalları bulun</span>
                        </div>
                        <div className='buttonMain'>
                            <button className='button'>Kanal bul</button>
                        </div>
                    </div>
                </div>
            )}
        </Transition>
    );
}

const NewPageChat = ({ onClose, users, selectUser }) => {

    const transitionStyles = {
        entering: { transform: 'translateX(0)', transition: 'transform 20s' },
        entered: { transform: 'translateX(0)' }
    };

    return (
        <Transition in={true} timeout={2000}>
            {state => (
                <div className="new-page" style={{ ...transitionStyles[state], width: '100%', height: 790, backgroundColor: 'white', position: 'absolute', top: 0 }}>
                    <div className='settingTopBg'>
                        <div>
                            <ArrowBackIcon onClick={onClose} style={{ color: 'white', fontSize: 28, position: 'relative', top: 70, left: 30, cursor: 'pointer' }} />
                        </div>
                        <div>
                            <span style={{ color: 'white', fontSize: 24, position: 'relative', top: 65, left: 60 }}>Yeni sohbet</span>
                        </div>
                    </div>
                    <div className='settingContainer'>
                        <div className='newChatPersonContainer'>
                            <div className='iconsAndInput'>
                                <SearchIcon style={{ color: "gray", position: 'relative', left: 15, top: 22, fontSize: 26, cursor: 'pointer' }} />
                                <div className='searchBar'>
                                    <input type='search' placeholder='Bir ad veya numara aratın' />
                                </div>
                            </div>
                            <div className='chatTopOptions'>
                                <div className='chatİcon'>
                                    <div className='chatİconBg'>
                                        <GroupIcon style={{ color: 'white', fontSize: 28 }} />
                                    </div>
                                    <div className='chatTopMainText'>
                                        <span className='chatTopText'>Yeni grup</span>
                                    </div>
                                </div>
                                <div className='chatİcon'>
                                    <div className='chatİconBg'>
                                        <GroupsIcon style={{ color: 'white', fontSize: 28 }} />
                                    </div>
                                    <div className='chatTopMainText'>
                                        <span className='chatTopText'>Yeni topluluk</span>
                                    </div>
                                </div>
                            </div>
                            <div className='middlewareMainText'>
                                <span className='middlewareText'>WHATSAPP'TAKİ KİŞİLER</span>
                            </div>
                            <div>
                                {users
                                    .sort((a, b) => {
                                        // Mustafa Danışan'ı önce getir
                                        if (a.userName === 'Mustafa Danışan(Siz)') {
                                            return -1;
                                        } else if (b.userName === 'Mustafa Danışan(Siz)') {
                                            return 1;
                                        }
                                        // İsimlerin alfabetik sıralaması
                                        return a.userName.localeCompare(b.userName);
                                    })
                                    .map(user => (
                                        <div
                                            key={user.id}
                                            onClick={() => {
                                                selectUser(user);
                                            }}
                                            className='newChatContainer'
                                        >
                                            <div className='newChatSelectPerson'>
                                                <img style={{ width: 50, height: 50, borderRadius: 25, position: 'relative', marginLeft: 15 }} src={user.photos} alt={user.userName} />
                                            </div>
                                            <div className='newChatUsers'>
                                                <div className='newChatUserName'>
                                                    <span className='newChatUserNameText'>{user.userName}</span>
                                                </div>
                                                <div className='newChatUserDesc'>
                                                    <span className='newChatUserDescText'>Linekln profili: mustafadns</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Transition>
    );
}

const NewPage = ({ onClose }) => {

    const transitionStyles = {
        entering: { transform: 'translateX(0)', transition: 'transform 20s' },
        entered: { transform: 'translateX(0)' }
    };

    return (
        <Transition in={true} timeout={2000}>
            {state => (
                <div className="new-page" style={{ ...transitionStyles[state], width: '100%', height: 790, backgroundColor: 'white', position: 'absolute', top: 0 }}>
                    <div>
                        <div className='settingTopBg'>
                            <div>
                                <ArrowBackIcon onClick={onClose} style={{ color: 'white', fontSize: 28, position: 'relative', top: 70, left: 30, cursor: 'pointer' }} />
                            </div>
                            <div>
                                <span style={{ color: 'white', fontSize: 24, position: 'relative', top: 65, left: 60 }}>Ayarlar</span>
                            </div>
                        </div>
                        <div className='settingContainer'>
                            <div className='iconsAndInput'>
                                <SearchIcon style={{ color: "gray", position: 'relative', left: 15, top: 22, fontSize: 26, cursor: 'pointer' }} />
                                <div className='searchBar'>
                                    <input type='search' placeholder='Ayarlarda arat' />
                                </div>
                            </div>
                            <div className='settingOptions'>
                                <div className='settingTop'>
                                    <div className='settingİmage'>
                                        <img className='settingPhotos' src='https://images.assetsdelivery.com/compings_v2/salamatik/salamatik1801/salamatik180100019.jpg' alt='resim' />
                                    </div>
                                    <div className='settingNameAndDics'>
                                        <span className='settingName'>Mustafa Danışan</span>
                                        <span className='settingDecs'>instagram: mustafadns</span>
                                    </div>
                                </div>
                                <div className='settingOptionsSelected'>
                                    <div className='options'>
                                        <div className='optionsİcon'>
                                            <NotificationsIcon style={{ fontSize: 28, color: '#3B4A54' }} />
                                        </div>
                                        <div>
                                            <span className='optionsText'>Bildirimler</span>
                                        </div>
                                    </div>
                                    <div className='options'>
                                        <div className='optionsİcon'>
                                            <LockIcon style={{ fontSize: 28, color: '#3B4A54' }} />
                                        </div>
                                        <div>
                                            <span className='optionsText'>Gizlilik</span>
                                        </div>
                                    </div>
                                    <div className='options'>
                                        <div className='optionsİcon'>
                                            <SecurityIcon style={{ fontSize: 28, color: '#3B4A54' }} />
                                        </div>
                                        <div>
                                            <span className='optionsText'>Güvenlik</span>
                                        </div>
                                    </div>
                                    <div className='options'>
                                        <div className='optionsİcon'>
                                            <Brightness6Icon style={{ fontSize: 28, color: '#3B4A54' }} />
                                        </div>
                                        <div>
                                            <span className='optionsText'>Tema</span>
                                        </div>
                                    </div>
                                    <div className='options'>
                                        <div className='optionsİcon'>
                                            <PhotoIcon style={{ fontSize: 28, color: '#3B4A54' }} />
                                        </div>
                                        <div>
                                            <span className='optionsText'>Sohbet duvar kağıdı</span>
                                        </div>
                                    </div>
                                    <div className='options'>
                                        <div className='optionsİcon'>
                                            <ArrowDownwardIcon style={{ fontSize: 28, color: '#3B4A54' }} />
                                        </div>
                                        <div>
                                            <span className='optionsText'>Medyayı otomatik indir</span>
                                        </div>
                                    </div>
                                    <div className='options'>
                                        <div className='optionsİcon'>
                                            <DescriptionIcon style={{ fontSize: 28, color: '#3B4A54' }} />
                                        </div>
                                        <div>
                                            <span className='optionsText'>Hesap bilgilerini talep et</span>
                                        </div>
                                    </div>
                                    <div className='options'>
                                        <div className='optionsİcon'>
                                            <Brightness5Icon style={{ fontSize: 28, color: '#3B4A54' }} />
                                        </div>
                                        <div>
                                            <span className='optionsText'>Klavye kısayolları</span>
                                        </div>
                                    </div>
                                    <div className='options'>
                                        <div className='optionsİcon'>
                                            <HelpIcon style={{ fontSize: 28, color: '#3B4A54' }} />
                                        </div>
                                        <div>
                                            <span className='optionsText'>Yardım</span>
                                        </div>
                                    </div>
                                    <div className='options'>
                                        <div className='optionsİcon'>
                                            <LogoutIcon style={{ fontSize: 28, color: '#EA0038' }} />
                                        </div>
                                        <div>
                                            <span className='optionsTextExit'>Çıkış yap</span>
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


class UsersList extends Component {

    state = {
        modalIsOpen: false,
        isNewPageChatOpen: false,
        isNewPageChannelsOpen: false,
        isNewPageStatusOpen: false,
        isNewPageCommunityOpen: false,
    }

    componentDidMount() {
        this.props.actions.getUsers();
    }

    selectUser = (user) => {
        this.props.actions.changeUser(user)
        this.props.actions.getMessages(user.id);
    }

    toggleModal = () => {
        this.setState(prevState => ({
            modalIsOpen: !prevState.modalIsOpen
        }));
    }

    toggleModalChats = () => {
        this.setState(prevState => ({
            modalIsOpen: !prevState.modalIsOpen
        }));
    }

    toggleModalChannels = () => {
        this.setState(prevState => ({
            modalIsOpen: !prevState.modalIsOpen
        }));
    }

    toggleModalStatus = () => {
        this.setState(prevState => ({
            modalIsOpen: !prevState.modalIsOpen
        }));
    }

    toggleModalCommunity = () => {
        this.setState(prevState => ({
            modalIsOpen: !prevState.modalIsOpen
        }));
    }

    toggleNewPage = () => {
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

    toggleNewPageChat = () => {
        this.setState(prevState => ({
            isNewPageChatOpen: !prevState.isNewPageChatOpen,
            modalIsOpen: false // Ayarlar menüsünü kapat
        }), () => {
            if (this.state.isNewPageChatOpen) {
                document.body.classList.add('new-page-opened');
            } else {
                document.body.classList.remove('new-page-opened');
            }
        });
    }

    toggleNewPageChannels = () => {
        this.setState(prevState => ({
            isNewPageChannelsOpen: !prevState.isNewPageChannelsOpen,
            modalIsOpen: false // Ayarlar menüsünü kapat
        }), () => {
            if (this.state.isNewPageChatOpen) {
                document.body.classList.add('new-page-opened');
            } else {
                document.body.classList.remove('new-page-opened');
            }
        });
    }

    toggleNewPageStatus = () => {
        this.setState(prevState => ({
            isNewPageStatusOpen: !prevState.isNewPageStatusOpen,
            modalIsOpen: false // Ayarlar menüsünü kapat
        }), () => {
            if (this.state.isNewPageChatOpen) {
                document.body.classList.add('new-page-opened');
            } else {
                document.body.classList.remove('new-page-opened');
            }
        });
    }

    toggleNewPageCommunity = () => {
        this.setState(prevState => ({
            isNewPageCommunityOpen: !prevState.isNewPageCommunityOpen,
            modalIsOpen: false // Ayarlar menüsünü kapat
        }), () => {
            if (this.state.isNewPageChatOpen) {
                document.body.classList.add('new-page-opened');
            } else {
                document.body.classList.remove('new-page-opened');
            }
        });
    }

    render() {
        return (
            <div className='main'>
                <div>
                    <div className='navbar'>
                        <div className='personİmage'>
                            <img className='image' src='https://images.assetsdelivery.com/compings_v2/salamatik/salamatik1801/salamatik180100019.jpg' alt='resim' />
                        </div>
                        <div className='total-icons'>
                            <div className='navbar-icon'>
                                <GroupsIcon style={{ color: "gray", fontSize: 26 }} onClick={this.toggleNewPageCommunity} />
                            </div>
                            <div className='navbar-icon'>
                                <AutorenewIcon style={{ color: "gray", fontSize: 26 }} onClick={this.toggleNewPageStatus} />
                            </div>
                            <div className='navbar-icon'>
                                <VoiceChatIcon style={{ color: "gray", fontSize: 26 }} onClick={this.toggleNewPageChannels} />
                            </div>
                            <div className='navbar-icon'>
                                <ChatIcon style={{ color: "gray", fontSize: 26 }} onClick={this.toggleNewPageChat} />
                            </div>
                            <div className='navbar-icon'>
                                <MoreVertIcon style={{ color: "gray", fontSize: 26 }} onClick={this.toggleModal} />
                            </div>
                        </div>
                    </div>
                    <div className='iconsAndInput'>
                        <SearchIcon style={{ color: "gray", position: 'relative', left: 15, top: 22, fontSize: 26, cursor: 'pointer' }} />
                        <div className='searchBar'>
                            <input type='search' placeholder='Aratın veya yeni sohbet başlatın' />
                        </div>
                        <FilterListIcon style={{ color: "gray", position: 'relative', top: 20, fontSize: 30, cursor: 'pointer' }} />
                    </div>
                </div>
                <div className='user-list'>
                    {this.props.users.map(user => (
                        user.userName !== 'Mustafa Danışan(Siz)' ? (
                            <div
                                className={`user-List-Main ${user.id === this.props.currentUser.id ? 'active' : ''}`}
                                onClick={() => {
                                    user.totalUnhread = 0;
                                    this.selectUser(user);
                                }
                                }
                                key={user.id}
                            >
                                <div className='image_total'>
                                    <img className='user-photos' key={user.id} src={user.photos} alt='resim' />
                                </div>
                                <div style={{width:'75%'}}>
                                    <div className='userName'>{user.userName}</div>
                                    <div className='lasMessageAndİcon'>
                                        <DoneAllIcon style={{ position: 'relative', marginRight: 15, left: 15, fontSize: 18, color: "#53BDEB" }} size={22} />
                                        <div className='lastMessage'>{user.lastMessage}</div>
                                    </div>
                                </div>
                                <div className='timeAndTotalUnhread'>
                                    <div>
                                        <span className='timeText'>{user.time}</span>
                                    </div>
                                    {/* totalUnhread değerini göster (0 olmadığında) */}
                                    {user.totalUnhread !== 0 && (
                                    <div className='totalUnhreadBg'>
                                        <span className='totalUnhread'>{user.totalUnhread}</span>
                                    </div>
                                )}
                                </div>
                            </div>
                        ) : null
                    ))}
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
                            left: '210px',
                            width: '150px',
                            height: '300px',
                            borderRadius: '10px',
                        },
                        content: {
                            width: '250px',
                            height: '300px',
                            backgroundColor: 'white',
                            borderRadius: '5px',
                            boxShadow: 'none',
                            padding:0
                        }
                    }}
                >
                    <div style={{ width: '100%', height: 'auto' }}>
                        <div className='toggleModalMain'>
                            <div className='toggleOptions'>
                                <span className='toglleText'>Yeni grup</span>
                            </div>
                            <div className='toggleOptions'>
                                <span className='toglleText'>Yeni topluluk</span>
                            </div>
                            <div className='toggleOptions'>
                                <span className='toglleText'>Yıldızlı mesajlar</span>
                            </div>
                            <div className='toggleOptions'>
                                <span className='toglleText'>Sohbetleri seç</span>
                            </div>
                            <div className='toggleOptions' onClick={this.toggleNewPage}>
                                <span className='toglleText'>Ayarlar</span>
                            </div>
                            <div className='toggleOptions'>
                                <span className='toglleText'>Çıkış yap</span>
                            </div>
                            <div className='toggleOptionsDowload'>
                                <span className='toglleText'>Windows için WhatsApp'ı indir</span>
                            </div>
                        </div>
                    </div>
                </Modal>
                {this.state.isNewPageOpen && <NewPage onClose={this.toggleNewPage} />}
                {this.state.isNewPageChatOpen && <NewPageChat onClose={this.toggleNewPageChat} users={this.props.users} selectUser={this.selectUser} />}
                {this.state.isNewPageChannelsOpen && <NewPageChannels onClose={this.toggleNewPageChannels} users={this.props.users} />}
                {this.state.isNewPageStatusOpen && <NewPageStatus onClose={this.toggleNewPageStatus} users={this.props.users} />}
                {this.state.isNewPageCommunityOpen && <NewPageCommunity onClose={this.toggleNewPageCommunity} users={this.props.users} />}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        currentUser: state.changeUserReducer,
        users: state.userListReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getUsers: bindActionCreators(
                userActions.getUsers,
                dispatch
            ),
            changeUser: bindActionCreators(
                userActions.changeUser,
                dispatch
            ),
            getMessages: bindActionCreators(
                messageActions.getMessages,
                dispatch
            )
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersList)