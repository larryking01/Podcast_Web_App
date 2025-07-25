import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth-guard';
import { AdminLogin } from './features/admin/admin-login/admin-login';
import { Home } from './features/public/home/home';
import { TeamMembers } from './features/public/team-members/team-members';
import { NotFound } from './features/public/not-found/not-found';


export const routes: Routes = [
    {
        path: '',
        component: Home,
        title: 'Home'
    },
    {
        path: 'admin',
        component: AdminLogin,
        title: 'Admin Login'
    }, 
        {
            path: 'admin/dashboard',
            loadComponent: () => import('./features/admin/admin-dashboard/admin-dashboard').then( m => m.AdminDashboard ),
            title: 'Admin dashboard',
            canActivate: [authGuard]
        },
    {
        path: 'admin/confessions',
        loadComponent: () => import('./features/admin/admin-confessions/admin-confessions').then( m => m.AdminConfessions ),
        title: 'Admin view all confessions',
        canActivate: [authGuard]
    },
    {
        path: 'admin/playlists',
        canActivate: [authGuard],
        children: [
            {
                path: 'create-playlists',
                loadComponent: () => import('./features/admin/admin-playlists/create-playlist/create-playlist').then( m => m.CreatePlaylist ),
                title: 'Admin create playlists'
            },
            {
                path: 'view-playlists',
                loadComponent: () => import('./features/admin/admin-playlists/view-playlists/view-playlists').then( m => m.ViewPlaylistsComponent ),
                title: 'Admin view playlists'
            },
            {
                path: 'edit-playlists',
                loadComponent: () => import('./features/admin/admin-playlists/edit-playlist/edit-playlist').then( m => m.EditPlaylist ),
                title: 'Admin edit playlists'
            },
            {
                path: 'delete-playlists',
                loadComponent: () => import('./features/admin/admin-playlists/delete-playlist/delete-playlist').then( m => m.DeletePlaylist ),
                title: 'Admin delete playlists'
            },
            {
                path: ':id', // Route for playlist details
                loadComponent: () => import('./features/admin/admin-playlists/playlist-detail/playlist-detail.component').then( m => m.PlaylistDetailComponent ),
                title: 'Playlist Details'
            }
        ]
    },
    {
        path: 'admin',
        canActivate: [authGuard],
        children: [
            {
                path: 'team',
                children: [
                    {
                        path: '',
                        loadComponent: () => import('./features/admin/admin-team/view-team/view-team').then( m => m.ViewTeam ),
                        title: 'View all team members'
                    },
                    {
                        path: 'create-team-member',
                        loadComponent: () => import('./features/admin/admin-team/create/create').then( m => m.CreateTeam ),
                        title: 'Add team member'
                    },
                    {
                        path: 'edit-team-member/:id',
                        loadComponent: () => import('./features/admin/admin-team/edit-team/edit-team').then( m => m.EditTeam ),
                        title: 'Edit team member'
                    },
                    {
                        path: 'team-member-details/:id',
                        loadComponent: () => import('./features/admin/admin-team/team-details/team-details').then( m => m.TeamDetails ),
                        title: 'Team member details'
                    }
                ]
            }
        ]
    },
    {
        path: 'confessions',
        loadComponent: () => import('./features/public/confessions/confessions').then( m => m.Confessions ),
        title: 'Confessions'
    },
    {
        path: 'episodes/:id',
        loadComponent: () => import('./features/public/episode-details/episode-details').then( m => m.EpisodeDetails ),
        title: 'Episode details'
    },
    {
        path: 'episodes',
        loadComponent: () => import('./features/public/episodes/episodes').then( m => m.Episodes ),
        title: 'Episodes'
    },
    {
        path: 'playlists',
        loadComponent: () => import('./features/public/playlists/playlists').then( m => m.Playlists),
        title: 'Playlists'
    },
    {
        path: 'team-members',
        component: TeamMembers,
        title: 'Meet our team'
    },
    {
        path: '**',
        title: 'Not Found',
        component: NotFound
    }
];
